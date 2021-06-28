import { normalizeFileName } from '../normalizeFileName'

type OnProgressFn = (percent: number, status?: string, file?: File) => void

// export const getSignedUrl = async (file: File): Promise<string> => {
//   const token = global.localStorage?.token || ''

//   const { type: contentType, name: objectName } = file

//   // const signUrl = ctx.s3ApiURL + '/sign?' + new URLSearchParams(args)
//   const signUrl =
//     s3ApiURL +
//     '/sign?' +
//     new URLSearchParams({
//       objectName: normalizeFileName(objectName),
//       /**
//        * Нельзя здесь энкодить, потому что спецсимвол получается вместо слеша
//        * и не проходит потом проверка подписи
//        */
//       // contentType: encodeURIComponent(contentType),
//       contentType: contentType,
//     })

//   console.log('S3getSignedUrl signUrl', signUrl)

//   const result = await fetch(signUrl, {
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: token,
//     },
//     // body: new FormData(args)
//   }).then(async (response) => {
//     const text = await response.text()

//     console.log('S3getSignedUrl response text', text)

//     try {
//       const json: SignResult = JSON.parse(text)

//       if (!json.signedUrl) {
//         throw new Error('Не был получен УРЛ загрузки')
//       }

//       //  else
//       return json.signedUrl
//     } catch (error) {
//       throw new Error(text)
//     }
//   })

//   console.log('S3getSignedUrl result', result)

//   return result
// }

/**
 * Uploads the given file to the S3 storage and returns it's public url
 * @param file - single file entity from the file input
 * @param onProgress - optional callback to track upload progress
 */
// export const uploadFileS3 = (
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   file: File | any,
//   onProgress?: OnProgressFn
// ): Promise<string> => {
//   return getSignedUrl(file).then((signedUrl) =>
//     uploadToS3(file, signedUrl, onProgress)
//   )
// }

/**
 * S3 low-level upload, using PUT to the pre-signed URL
 * XHR is used because fetch doesn't support progress tracking.
 */
export const uploadToS3 = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: File & any,
  signedUrl: string,
  onProgress?: OnProgressFn
): Promise<string> => {
  // let disposition = this.contentDisposition
  // const uploadRequestHeaders = this.uploadRequestHeaders
  let disposition = ''
  const uploadRequestHeaders: Record<string, string> = {}

  return new Promise((resolve, reject) => {
    const xhr = createCORSRequest('PUT', signedUrl)
    if (!xhr) {
      reject(new Error('CORS not supported' + file))
    } else {
      xhr.onload = () => {
        if (xhr.status === 200) {
          if (onProgress) {
            onProgress(100, 'Upload completed', file)
          }

          // need to replace proxy domain with original here to reliably save original URL to the DB
          const publicUrl = clearProxy(signedUrl.split('?')[0])
          resolve(publicUrl)
        } else {
          console.error('Upload to s3 error', xhr)
          reject(new Error('Upload error: ' + xhr.status))
        }
      }
      xhr.onerror = function () {
        reject(new Error('XHR error' + file))
      }
      xhr.upload.onprogress = function (e: ProgressEvent) {
        if (e.lengthComputable) {
          const percentLoaded = Math.round((e.loaded / e.total) * 100)
          if (onProgress) {
            onProgress(
              percentLoaded,
              percentLoaded === 100 ? 'Finalizing' : 'Uploading',
              file
            )
          }
        }
      }
    }
    xhr.setRequestHeader('Content-Type', file.type)

    if (disposition) {
      if (disposition === 'auto') {
        if (file.type.substr(0, 6) === 'image/') {
          disposition = 'inline'
        } else {
          disposition = 'attachment'
        }
      }
      const fileName = normalizeFileName(file.name)
      xhr.setRequestHeader(
        'Content-Disposition',
        disposition + ' filename=' + fileName
      )
    }
    if (uploadRequestHeaders) {
      Object.keys(uploadRequestHeaders).forEach(function (key: string) {
        const val = uploadRequestHeaders[key]
        xhr.setRequestHeader(key, val)
      })
    }
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    // We should set uri for images from native
    if (file.url && !file.uri) {
      Object.assign(file, { uri: file.url })
    }

    xhr.send(file)
  })
}

const clearProxy = (url: string): string => {
  // todo: move to config
  const proxyDomain = 'aws.procraft.com'
  return proxyDomain ? url.replace(proxyDomain, 'amazonaws.com') : url
}

// class S3Uploader {

//   private privateApi: ApiClient
//   private signingUrl: string = '/s3/sign'

//   // just for reference
//   private contentDisposition: string
//   private uploadRequestHeaders: { [key: string]: string }

//   constructor(privateApi: ApiClient) {
//     this.privateApi = privateApi
//   }

//   /**
//    * Retrieves from the backend the URL authorized by the storage service to be able to upload file from the browser
//    */

// }

// interface SignResult {
//   signedUrl: string
// }

function createCORSRequest(method: string, url: string): XMLHttpRequest {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  return xhr
}
