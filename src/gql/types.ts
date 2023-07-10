/* eslint-disable */

/**
 * ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО
 * Команда для генерирования этого файла: "yarn generate:types"
 */

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: number
  DateTime: globalThis.Date
  Json: any
  /** desc */
  Upload: globalThis.File
}

export interface AbonnementTransactionInput {
  abonnementId: Scalars['Int']
  price: Scalars['BigDecimal']
  quantity: Scalars['BigDecimal']
}

export interface AddressInput {
  address1: Scalars['String']
  address2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  countryCode?: Maybe<Scalars['String']>
  latitude: Scalars['BigDecimal']
  longitude: Scalars['BigDecimal']
  notes?: Maybe<Scalars['String']>
  primary?: Maybe<Scalars['Boolean']>
  region?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
}

export enum CardFieldName {
  ATTACHMENTS = 'Attachments',
  EMAIL = 'Email',
  MESSENGERFACEBOOK = 'MessengerFacebook',
  MESSENGERHANGOUTS = 'MessengerHangouts',
  MESSENGERIMESSAGE = 'MessengerIMessage',
  MESSENGERSKYPE = 'MessengerSkype',
  MESSENGERTELEGRAM = 'MessengerTelegram',
  MESSENGERVIBER = 'MessengerViber',
  MESSENGERWHATSAPP = 'MessengerWhatsApp',
  MIDDLENAME = 'MiddleName',
  SOCIALFACEBOOK = 'SocialFacebook',
  SOCIALINSTAGRAM = 'SocialInstagram',
  SOCIALOK = 'SocialOk',
  SOCIALTWITTER = 'SocialTwitter',
  SOCIALVK = 'SocialVk',
}

export enum CardFieldState {
  DISABLED = 'Disabled',
  ENABLED = 'Enabled',
  REQUIRED = 'Required',
}

export interface CashPaymentAlias {
  __typename?: 'CashPaymentAlias'
  description: Scalars['String']
  id: Scalars['ID']
  masterId: Scalars['Int']
  name: Scalars['String']
  showInCart: Scalars['Boolean']
  uid: Scalars['Int']
}

export interface CatalogFieldValue {
  __typename?: 'CatalogFieldValue'
  /** Количество оставшихся мест */
  availableCount?: Maybe<Scalars['Int']>
  extraPay: Scalars['BigDecimal']
  extraPayOriginal?: Maybe<Scalars['BigDecimal']>
  extraPayPercentage: Scalars['BigDecimal']
  extraWork: Scalars['BigDecimal']
  extraWorkPercentage: Scalars['BigDecimal']
  fieldId: Scalars['Int']
  fieldName: Scalars['String']
  /** Используется для группировки по табам */
  groupName?: Maybe<Scalars['String']>
  isDefault?: Maybe<Scalars['Boolean']>
  isSelected: Scalars['Boolean']
  optionName: Scalars['String']
  optionValue?: Maybe<Scalars['String']>
  /** Кастомный признак типа записи */
  type: CatalogFieldValueType
  /** Первичный ключ элемента в рамках списка полей конкретного элемента каталога */
  uid: Scalars['String']
}

export interface CatalogFieldValueInput {
  extraPay?: Maybe<Scalars['BigDecimal']>
  extraPayPercentage?: Maybe<Scalars['BigDecimal']>
  extraWork?: Maybe<Scalars['BigDecimal']>
  extraWorkPercentage?: Maybe<Scalars['BigDecimal']>
  fieldId: Scalars['Int']
  fieldName?: Maybe<Scalars['String']>
  isSelected?: Maybe<Scalars['Boolean']>
  optionName: Scalars['String']
  optionValue?: Maybe<Scalars['String']>
}

/** Тип поля */
export enum CatalogFieldValueType {
  /** Базовая покупка курса */
  COURSE = 'Course',
  /** Подписка */
  SUBSCRIPTION = 'Subscription',
  /** Неизвестный тип */
  UNKNOWN = 'Unknown',
}

export interface ClientForm {
  __typename?: 'ClientForm'
  createdAt: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  isDraft: Scalars['Boolean']
  kind: ClientFormKind
  name: Scalars['String']
  orgId: Scalars['Int']
  uid: Scalars['Int']
}

export interface ClientFormAnswer {
  __typename?: 'ClientFormAnswer'
  answer?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  files?: Maybe<Array<FileMeta>>
  questionId: Scalars['Int']
  responseId: Scalars['Int']
  uid: Scalars['Int']
  variantId?: Maybe<Scalars['Int']>
}

export interface ClientFormClientAnswer {
  answer?: Maybe<Scalars['String']>
  files?: Maybe<Array<FileMetaInput>>
  questionId: Scalars['Int']
  variants?: Maybe<Array<Scalars['Int']>>
}

export enum ClientFormKind {
  DEFAULT = 'Default',
  NEWMEMBER = 'NewMember',
}

export interface ClientFormQuestion {
  __typename?: 'ClientFormQuestion'
  createdAt: Scalars['DateTime']
  formId: Scalars['Int']
  isMandatory: Scalars['Boolean']
  kind: ClientFormQuestionKind
  orderIndex: Scalars['Float']
  question: Scalars['String']
  uid: Scalars['Int']
  variants: Array<ClientFormQuestionVariant>
}

export enum ClientFormQuestionKind {
  FILELIST = 'FileList',
  MULTIVARIANT = 'MultiVariant',
  PARAGRAPH = 'Paragraph',
  SINGLELINE = 'SingleLine',
  SINGLEVARIANT = 'SingleVariant',
}

export interface ClientFormQuestionVariant {
  __typename?: 'ClientFormQuestionVariant'
  createdAt: Scalars['DateTime']
  name: Scalars['String']
  orderIndex: Scalars['Float']
  questionId: Scalars['Int']
  uid: Scalars['Int']
}

export interface ClientFormSubmitExtraFieldsInput {
  answers: Array<ClientFormClientAnswer>
  isDraft?: Maybe<Scalars['Boolean']>
}

export interface ClientFormSubmitExtraFieldsPayload {
  __typename?: 'ClientFormSubmitExtraFieldsPayload'
  clientForms: Array<ClientForm>
}

/** Контакты пользователя */
export interface ContactsProfile {
  __typename?: 'ContactsProfile'
  email?: Maybe<Scalars['String']>
  emails: Array<Email>
  id: Scalars['ID']
  messengers: Array<Messenger>
  phone?: Maybe<Scalars['String']>
  phones: Array<Phone>
  primaryEmail?: Maybe<Scalars['String']>
  primaryPhone?: Maybe<Scalars['String']>
  socials: Array<Social>
}

export enum CourseFlowBehaviour {
  CONTINUOUS = 'Continuous',
  MULTIPLE = 'Multiple',
  SINGLE = 'Single',
}

export interface CourseItem {
  __typename?: 'CourseItem'
  courseId: Scalars['Int']
  flowId?: Maybe<Scalars['Int']>
  /** На сколько дней продление. Нужно для prolongation. */
  prolongationDays?: Maybe<Scalars['Int']>
  tariffId?: Maybe<Scalars['Int']>
}

export enum CourseKind {
  ABONNEMENT = 'Abonnement',
  COURSE = 'Course',
  SUBSCRIPTION = 'Subscription',
  WEBINAR = 'Webinar',
}

export interface CoursePublicCustom {
  __typename?: 'CoursePublicCustom'
  catalogItems?: Maybe<Array<OrderCatalogItemFragment>>
  id: Scalars['ID']
  kind?: Maybe<CourseKind>
  name: Scalars['String']
  subKind?: Maybe<CourseSubKind>
  tariffPerFlowDataItems?: Maybe<Array<CourseTariffFlowPublic>>
  tariffs?: Maybe<Array<CourseTariffPublicCustom>>
  uid: Scalars['Int']
}

export enum CourseSubKind {
  ABONNEMENT = 'Abonnement',
  CLUB = 'Club',
  COURSE = 'Course',
  FACULTY = 'Faculty',
  INTENSIVE = 'Intensive',
  MARATHON = 'Marathon',
  MASTERCLASS = 'MasterClass',
  PRERECORDING = 'PreRecording',
  SUBSCRIPTION = 'Subscription',
  WEBINAR = 'Webinar',
  WORKSHOP = 'Workshop',
}

export enum CourseTariffFlowBehaviour {
  CONTINUOUS = 'Continuous',
  MULTIPLE = 'Multiple',
  SINGLE = 'Single',
}

export interface CourseTariffFlowPublic {
  __typename?: 'CourseTariffFlowPublic'
  courseId: Scalars['Int']
  courseTariffId: Scalars['Int']
  flowId: Scalars['Int']
  priceDetails: CourseTariffPriceDetails
  /** Условия продления курса */
  prolongation: CourseTariffProlongation
}

export interface CourseTariffPriceDetails {
  __typename?: 'CourseTariffPriceDetails'
  /** Изменение цены с учетом даты */
  changeByTime?: Maybe<CourseTariffPriceDetailsChangeByTime>
  kind: CourseTariffPriceKind
}

export interface CourseTariffPriceDetailsChangeByTime {
  __typename?: 'CourseTariffPriceDetailsChangeByTime'
  /** Учитывается только второй элемент и только свойство startsAt */
  items: Array<CourseTariffPriceDetailsChangeByTimeItem>
}

export interface CourseTariffPriceDetailsChangeByTimeItem {
  __typename?: 'CourseTariffPriceDetailsChangeByTimeItem'
  finishesAt?: Maybe<Scalars['DateTime']>
  priceMarketing: Scalars['Int']
  priceReal: Scalars['Int']
  startsAt?: Maybe<Scalars['DateTime']>
}

export enum CourseTariffPriceKind {
  CHANGESBYSALES = 'ChangesBySales',
  CHANGESBYTIME = 'ChangesByTime',
  FIXED = 'Fixed',
  FREE = 'Free',
  SUBSCRIPTION = 'Subscription',
}

export interface CourseTariffProlongation {
  __typename?: 'CourseTariffProlongation'
  items: Array<CourseTariffProlongationItem>
}

export interface CourseTariffProlongationItem {
  __typename?: 'CourseTariffProlongationItem'
  periodInDays: Scalars['Int']
  price: Scalars['Int']
}

export interface CourseTariffPublicCustom {
  __typename?: 'CourseTariffPublicCustom'
  courseId: Scalars['Int']
  flowBehaviour: CourseTariffFlowBehaviour
  id: Scalars['ID']
  isActive: Scalars['Boolean']
  marketingBenefits: Array<Scalars['String']>
  name: Scalars['String']
  position: Scalars['Int']
  uid: Scalars['Int']
}

export interface CreateLandingOrderInput {
  address?: Maybe<AddressInput>
  clientMutationId?: Maybe<Scalars['String']>
  deliveryId?: Maybe<Scalars['Int']>
  isMultiday?: Maybe<Scalars['Boolean']>
  locationId?: Maybe<Scalars['Int']>
  /** Поэтапная оплата */
  partialPayment?: Maybe<Scalars['Boolean']>
  positions: Array<OrderPositionInput>
  promoCode?: Maybe<Scalars['String']>
  selectedTime?: Maybe<Array<OrderSelectedTimeInput>>
}

export interface CreateLandingTemplateInput {
  patch: LandingTemplateCreateInput
}

export interface Email {
  __typename?: 'Email'
  email: Scalars['String']
}

export interface FileMeta {
  __typename?: 'FileMeta'
  customInfo?: Maybe<Scalars['String']>
  lastModified: Scalars['Float']
  mimeType: Scalars['String']
  name: Scalars['String']
  size: Scalars['Int']
  url: Scalars['String']
}

export interface FileMetaInput {
  customInfo?: Maybe<Scalars['String']>
  lastModified: Scalars['Float']
  mimeType: Scalars['String']
  name: Scalars['String']
  size: Scalars['Int']
  url: Scalars['String']
}

export interface FlowPublicCustom {
  __typename?: 'FlowPublicCustom'
  colorStyle: Scalars['String']
  finishesAt?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  kind: CourseFlowBehaviour
  name: Scalars['String']
  startsAt?: Maybe<Scalars['DateTime']>
  uid: Scalars['Int']
}

export interface ItemOrderConditionData {
  __typename?: 'ItemOrderConditionData'
  catalogItems: Array<OrderCatalogItemFragment>
  shouldContainAll: Scalars['Boolean']
}

export enum PriceOrderConditionKind {
  BETWEEN = 'Between',
  TO = 'To',
  FROM = 'From'
}

export interface PriceOrderConditionData {
  __typename?: 'PriceOrderConditionData';
  kind: PriceOrderConditionKind;
  from?: Maybe<Scalars['BigDecimal']>;
  to?: Maybe<Scalars['BigDecimal']>;
}

export interface LandingCardField {
  __typename?: 'LandingCardField'
  name: CardFieldName
  state: CardFieldState
}

export interface LandingOrderPayload {
  __typename?: 'LandingOrderPayload'
  order?: Maybe<OrderCustom>
}

export interface LandingSite {
  __typename?: 'LandingSite'
  background?: Maybe<PhotoData>
  cardFields: Array<LandingCardField>
  id: Scalars['ID']
}

export interface LandingSitePrivate {
  __typename?: 'LandingSitePrivate'
  id: Scalars['ID']
  uid: Scalars['Int']
}

export interface LandingTemplateCreateInput {
  component: Scalars['String']
  components: Scalars['Json']
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  parentId?: Maybe<Scalars['Int']>
  props: Scalars['Json']
  uri?: Maybe<Scalars['String']>
}

export interface LandingTemplateUpdateInput {
  component?: Maybe<Scalars['String']>
  components?: Maybe<Scalars['Json']>
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  parentId?: Maybe<Scalars['Int']>
  props?: Maybe<Scalars['Json']>
  uri?: Maybe<Scalars['String']>
}

export interface LandingTemplateFragment {
  __typename?: 'LandingTemplate__Fragment'
  component: Scalars['String']
  components: Scalars['Json']
  description?: Maybe<Scalars['String']>
  foo?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  name: Scalars['String']
  props: Scalars['Json']
  uri?: Maybe<Scalars['String']>
}

/** Роль пользователя */
export interface LandingViewerUserRoleFragment {
  __typename?: 'LandingViewerUserRole_Fragment'
  contacts: ContactsProfile
  human: UserHuman
  id?: Maybe<Scalars['ID']>
  roles: LandingViewerUserRolesFragment
  uid: Scalars['Int']
}

/** Роли пользователя */
export interface LandingViewerUserRolesFragment {
  __typename?: 'LandingViewerUserRoles_Fragment'
  admin: Scalars['Boolean']
  client: Scalars['Boolean']
  master: Scalars['Boolean']
  partner: Scalars['Boolean']
}

export interface LandintTemplatePayload {
  __typename?: 'LandintTemplatePayload'
  landingTemplate: LandingTemplateFragment
}

export interface MasterClientProfileCommon {
  __typename?: 'MasterClientProfileCommon'
  extraFieldsAnswers: Array<ClientFormAnswer>
  id: Scalars['ID']
  uid: Scalars['Int']
}

export interface MasterProfileCustom {
  __typename?: 'MasterProfileCustom'
  cashPaymentAliases: Array<CashPaymentAlias>
  currency: Scalars['String']
  id: Scalars['ID']
  label?: Maybe<Scalars['String']>
  /** Лого организации */
  orgPhoto?: Maybe<PhotoData>
  /** Ссылка на договор оферты */
  pdfContractOffer?: Maybe<Scalars['String']>
  /** Ссылка на политику безопасности */
  pdfPrivacyPolicy?: Maybe<Scalars['String']>
  uid: Scalars['Int']
}

export enum MeetExpectation {
  /** Как ожидалось */
  ASEXPECTED = 'AsExpected',
  /** Ниже ожиданий */
  BELOWEXPECTATION = 'BelowExpectation',
  /** Выше ожиданий */
  OVEREXPECTATION = 'OverExpectation',
}

export interface Messenger {
  __typename?: 'Messenger'
  account: Scalars['String']
  service: MessengerServices
}

export interface MessengerPatch {
  name: MessengerServices
  value?: Maybe<Scalars['String']>
}

export enum MessengerServices {
  FACEBOOK = 'Facebook',
  HANGOUTS = 'Hangouts',
  IMESSAGE = 'IMessage',
  SKYPE = 'Skype',
  TELEGRAM = 'Telegram',
  VIBER = 'Viber',
  WHATSAPP = 'WhatsApp',
}

export interface Mutation {
  __typename?: 'Mutation'
  /** Регистрация или авторизация клиента по телефону */
  authClientByPhone?: Maybe<RestApiPayload>
  /** @deprecated Больше не нужно */
  clientFormSubmitExtraFields: ClientFormSubmitExtraFieldsPayload
  /** Создание заказа. Необходимо передать минимум одну позицию. */
  createLandingOrder?: Maybe<LandingOrderPayload>
  /** Создание шаблона */
  createLandingTemplate?: Maybe<LandintTemplatePayload>
  deleteLandingTemplateCustom: Scalars['Boolean']
  /** Авторизация */
  login?: Maybe<RestApiPayload>
  /**
   * Загрузка файла
   * @deprecated Пока не реализовано
   */
  s3Upload: Scalars['String']
  /** Получаем подписанный УРЛ для загрузки файлов */
  s3getSignedUrl: Scalars['String']
  /** Запрос СМС кода для авторизации для существующих клиентов */
  sendSmsCode?: Maybe<RestApiPayload>
  /** Подтверждение заказа */
  submitLandingOrder?: Maybe<LandingOrderPayload>
  /** Обновление заказа */
  updateLandingOrder?: Maybe<LandingOrderPayload>
  /** Обновление шаблона */
  updateLandingTemplate?: Maybe<LandintTemplatePayload>
}

export type MutationAuthClientByPhoneArgs = {
  phone: Scalars['String']
  smsCode: Scalars['String']
  smsToken: Scalars['String']
}

export type MutationClientFormSubmitExtraFieldsArgs = {
  input: ClientFormSubmitExtraFieldsInput
}

export type MutationCreateLandingOrderArgs = {
  input: CreateLandingOrderInput
}

export type MutationCreateLandingTemplateArgs = {
  input: CreateLandingTemplateInput
}

export type MutationDeleteLandingTemplateCustomArgs = {
  id: Scalars['ID']
}

export type MutationLoginArgs = {
  phone: Scalars['String']
  smsCode: Scalars['String']
  smsToken: Scalars['String']
}

export type MutationS3UploadArgs = {
  file: Scalars['Upload']
}

export type MutationS3getSignedUrlArgs = {
  contentType: Scalars['String']
  objectName: Scalars['String']
}

export type MutationSendSmsCodeArgs = {
  phone: Scalars['String']
  promoCode?: Maybe<Scalars['String']>
  promoCodeIsFromCookie?: Maybe<Scalars['Boolean']>
  shouldExist?: Maybe<Scalars['Boolean']>
}

export type MutationSubmitLandingOrderArgs = {
  input: SubmitLandingOrderInput
}

export type MutationUpdateLandingOrderArgs = {
  input: UpdateLandingOrderInput
}

export type MutationUpdateLandingTemplateArgs = {
  input: UpdateLandingTemplateInput
}

export interface OrderCatalogItemMaster {
  __typename?: 'OrderCatalogItemMaster'
  id: Scalars['ID']
  uid: Scalars['Int']
}

export interface OrderCatalogItemFragment {
  __typename?: 'OrderCatalogItem_Fragment'
  course?: Maybe<CourseItem>
  /** Опции с ценами */
  fieldValues?: Maybe<Array<CatalogFieldValue>>
  id: Scalars['ID']
  master?: Maybe<OrderCatalogItemMaster>
  name: Scalars['String']
  /** Стоимость при использовании промокода */
  priceWithPromoCode?: Maybe<Scalars['Float']>
  /** Примененный промокод */
  promoCode?: Maybe<PromoCodeFragment>
  /** Отзывы */
  reviews?: Maybe<OrderReviewsConnection>
  /** Количество отзывов */
  reviewsCount?: Maybe<Scalars['Int']>
  sales?: Maybe<Array<SaleCustom>>
  /** @deprecated Заголовки для формирования заказа */
  title: Array<Scalars['String']>
  uid: Scalars['Int']
  /** Цена */
  unitPrice?: Maybe<Scalars['Float']>
  /** Старая цена */
  unitPriceOriginal?: Maybe<Scalars['Float']>
}

export type OrderCatalogItemFragmentPriceWithPromoCodeArgs = {
  code: Scalars['String']
}

export type OrderCatalogItemFragmentPromoCodeArgs = {
  code: Scalars['String']
}

export interface OrderCondition {
  __typename?: 'OrderCondition'
  data?: Maybe<OrderConditionData>
  kind: Scalars['String']
}

export type OrderConditionData = ItemOrderConditionData | PriceOrderConditionData

export interface OrderCustom {
  __typename?: 'OrderCustom'
  /** Оригинальная цена без каких-либо скидок */
  catalogPrice?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  isMultiday?: Maybe<Scalars['Boolean']>
  /** Признак того, что указана оплата в несколько этапов */
  partialPayment: Scalars['Boolean']
  /** Суммы поэтапной оплаты */
  partialPrices: Array<PartialPrice>
  paymentUrl?: Maybe<Scalars['String']>
  positions: Array<OrderPosition>
  price?: Maybe<Scalars['Float']>
  promoCode?: Maybe<PromoCodeFragment>
  /** Цена с учетом всех скидок */
  salePrice?: Maybe<Scalars['Float']>
  status: OrderStatus
  uid: Scalars['Int']
}

export interface OrderPosition {
  __typename?: 'OrderPosition'
  catalogItemId?: Maybe<Scalars['Int']>
  name: Scalars['String']
  parentId?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  quantity: Scalars['Float']
  sales: Array<SaleOrderPosition>
  uid: Scalars['Int']
  usedCapacity: Scalars['Int']
  work?: Maybe<Scalars['Float']>
}

export interface OrderPositionInput {
  abonnementTransactions?: Maybe<Array<AbonnementTransactionInput>>
  catalogItemId?: Maybe<Scalars['Int']>
  fieldValues?: Maybe<Array<CatalogFieldValueInput>>
  id?: Maybe<Scalars['Int']>
  name: Scalars['String']
  parentId?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['BigDecimal']>
  quantity: Scalars['BigDecimal']
  sales?: Maybe<Array<SaleOrderPositionInput>>
  subscriptionPeriod?: Maybe<TimeUnitWithAmountInput>
  usedCapacity: Scalars['Int']
  work?: Maybe<Scalars['BigDecimal']>
}

export interface OrderReviewCustom {
  __typename?: 'OrderReviewCustom'
  client: UserProfileCustom
  id: Scalars['ID']
  meetExpectation?: Maybe<MeetExpectation>
  rating: Scalars['Int']
  text?: Maybe<Scalars['String']>
  timeCreated: Scalars['DateTime']
  uid: Scalars['Int']
}

export interface OrderReviewsConnection {
  __typename?: 'OrderReviewsConnection'
  edges?: Maybe<Array<Maybe<OrderReviewsEdge>>>
}

export interface OrderReviewsEdge {
  __typename?: 'OrderReviewsEdge'
  node: OrderReviewCustom
}

export interface OrderSelectedTimeInput {
  timeFrom: Scalars['String']
  timeTo: Scalars['String']
}

export enum OrderStatus {
  APPROVED = 'Approved',
  AUTORENEW = 'AutoRenew',
  AUTORENEWFAILED = 'AutoRenewFailed',
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed',
  DONE = 'Done',
  DRAFT = 'Draft',
  FAKE = 'Fake',
  INPROGRESS = 'InProgress',
  LEAD = 'Lead',
  MASTERAPPROVING = 'MasterApproving',
  NEW = 'New',
  NOSHOW = 'NoShow',
  OFFERACCEPTING = 'OfferAccepting',
  PAUSED = 'Paused',
  TEASER = 'Teaser',
  TIMEAPPROVING = 'TimeApproving',
}

/** Этап оплаты */
export interface PartialPrice {
  __typename?: 'PartialPrice'
  /** Сумма */
  amount: Scalars['Float']
  /** Крайний срок оплаты */
  deadline?: Maybe<Scalars['DateTime']>
}

export interface Phone {
  __typename?: 'Phone'
  number: Scalars['String']
}

export interface PhotoData {
  __typename?: 'PhotoData'
  height?: Maybe<Scalars['Int']>
  size?: Maybe<Scalars['Int']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export interface PhotoDataInput {
  height?: Maybe<Scalars['Int']>
  size?: Maybe<Scalars['Int']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

/** Текущий авторизованный пользователь */
export interface PrivateApiLandingViewer {
  __typename?: 'PrivateApiLandingViewer'
  id: Scalars['ID']
  /** Пользователь имеет право редактировать сайт */
  isEditor: Scalars['Boolean']
  landing?: Maybe<LandingSitePrivate>
  masterClientCommon?: Maybe<MasterClientProfileCommon>
  user?: Maybe<LandingViewerUserRoleFragment>
}

export interface PromoCodeFragment {
  __typename?: 'PromoCode_Fragment'
  activeFrom?: Maybe<Scalars['String']>
  activeTill?: Maybe<Scalars['String']>
  code: Scalars['String']
  discountPercent: Scalars['Float']
  id: Scalars['ID']
  isActive: Scalars['Boolean']
}

/** Основной объект просмотра сайта */
export interface PublicLandingViewer {
  __typename?: 'PublicLandingViewer'
  /** Prevent import * as Types error */
  foo?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  landing?: Maybe<LandingSite>
  master: PublicMasterRole
}

export interface PublicMasterRole {
  __typename?: 'PublicMasterRole'
  master: MasterProfileCustom
  uid: Scalars['Int']
}

export interface Query {
  __typename?: 'Query'
  courses: Array<CoursePublicCustom>
  /** Вопросы анкет для новых пользователей */
  extraFieldsQuestions?: Maybe<Array<ClientFormQuestion>>
  /** Текущий авторизованный пользователь */
  me?: Maybe<PrivateApiLandingViewer>
  /** Элемент каталога в заказе */
  orderCatalogItem?: Maybe<OrderCatalogItemFragment>
  /** Поиск промокода */
  promoCode?: Maybe<OrderCatalogItemFragment>
  /** Список файлов и папок в заданной директории */
  staticFiles: Array<StaticFile>
  /** Шаблон */
  template?: Maybe<LandingTemplateFragment>
  /** Список шаблонов */
  templates: Array<LandingTemplateFragment>
  viewer: PublicLandingViewer
}

export type QueryCoursesArgs = {
  code: Scalars['String']
}

export type QueryOrderCatalogItemArgs = {
  code: Scalars['String']
  gid: Scalars['ID']
}

export type QueryPromoCodeArgs = {
  catalogItemGid: Scalars['ID']
  code: Scalars['String']
  saleId?: Maybe<Scalars['ID']>
}

export type QueryStaticFilesArgs = {
  dir?: Maybe<Scalars['String']>
}

export type QueryTemplateArgs = {
  where: TemplateWhereUniqueInput
}

export type QueryTemplatesArgs = {
  where?: Maybe<TemplateWhereInput>
}

/** Ответ для REST-запросов */
export interface RestApiPayload {
  __typename?: 'RestApiPayload'
  error: Scalars['Boolean']
  message: Scalars['String']
  token?: Maybe<Scalars['String']>
}

export enum SaleBenefitKind {
  ALLCRAFTS = 'AllCrafts',
  ALLPRODUCTS = 'AllProducts',
  CONDITIONITEMS = 'ConditionItems',
  DISCOUNTITEMS = 'DiscountItems',
  GIFTITEMS = 'GiftItems',
}

export enum SaleBenefitUnit {
  MONEY = 'Money',
  PERCENT = 'Percent',
}

/** Скидка */
export interface SaleCustom {
  __typename?: 'SaleCustom'
  benefitAmount?: Maybe<Scalars['Float']>
  benefitItems: Array<OrderCatalogItemFragment>
  benefitKind: SaleBenefitKind
  benefitUnit?: Maybe<SaleBenefitUnit>
  id: Scalars['ID']
  isActive: Scalars['Boolean']
  name: Scalars['String']
  orderCondition?: Maybe<OrderCondition>
  uid: Scalars['Int']
}

export interface SaleOrderPosition {
  __typename?: 'SaleOrderPosition'
  benefitAmount: Scalars['Float']
  benefitUnit: SaleBenefitUnit
  isBest?: Maybe<Scalars['Boolean']>
  positionId: Scalars['Int']
  saleId: Scalars['Int']
  saleName: Scalars['String']
}

export interface SaleOrderPositionInput {
  benefitAmount: Scalars['BigDecimal']
  benefitUnit: SaleBenefitUnit
  isBest?: Maybe<Scalars['Boolean']>
  positionId: Scalars['Int']
  saleId: Scalars['Int']
  saleName: Scalars['String']
}

export interface Social {
  __typename?: 'Social'
  account: Scalars['String']
  network: SocialNetworks
}

export enum SocialNetworks {
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  OK = 'Ok',
  TWITTER = 'Twitter',
  VK = 'Vk',
}

export interface SocialPatch {
  name: SocialNetworks
  value?: Maybe<Scalars['String']>
}

/** Статический файл или папка */
export interface StaticFile {
  __typename?: 'StaticFile'
  mimeType?: Maybe<Scalars['String']>
  name: Scalars['String']
  relativePath: Scalars['String']
  type: StaticFileType
}

export enum StaticFileType {
  DIRECTORY = 'Directory',
  FILE = 'File',
}

export interface SubmitLandingOrderInput {
  address?: Maybe<AddressInput>
  attachments?: Maybe<Array<PhotoDataInput>>
  clientMutationId?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  extraFields: Array<ClientFormClientAnswer>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  orderId: Scalars['Int']
  patchMessengers?: Maybe<Array<MessengerPatch>>
  patchSocials?: Maybe<Array<SocialPatch>>
}

export interface TemplateWhereInput {
  name?: Maybe<Scalars['String']>
  parentID?: Maybe<Scalars['ID']>
  /** УРЛ шаблона */
  uri?: Maybe<Scalars['String']>
}

export interface TemplateWhereUniqueInput {
  id?: Maybe<Scalars['String']>
  /** УРЛ шаблона */
  uri?: Maybe<Scalars['String']>
}

export enum TimeUnit {
  DAYS = 'Days',
  HOURS = 'Hours',
  MINUTES = 'Minutes',
  MONTHS = 'Months',
  WEEKS = 'Weeks',
}

export interface TimeUnitWithAmount {
  __typename?: 'TimeUnitWithAmount'
  amount: Scalars['Int']
  unit: TimeUnit
}

export interface TimeUnitWithAmountInput {
  amount: Scalars['Int']
  unit: TimeUnit
}

export interface UpdateLandingOrderInput {
  address?: Maybe<AddressInput>
  attachments?: Maybe<Array<PhotoDataInput>>
  clientMutationId?: Maybe<Scalars['String']>
  deliveryId?: Maybe<Scalars['Int']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  isMultiday?: Maybe<Scalars['Boolean']>
  lastName?: Maybe<Scalars['String']>
  locationId?: Maybe<Scalars['Int']>
  middleName?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  orderId: Scalars['Int']
  /** Поэтапная оплата */
  partialPayment?: Maybe<Scalars['Boolean']>
  patchMessengers?: Maybe<Array<MessengerPatch>>
  patchSocials?: Maybe<Array<SocialPatch>>
  positions: Array<OrderPositionInput>
  promoCode?: Maybe<Scalars['String']>
  selectedTime?: Maybe<Array<OrderSelectedTimeInput>>
}

export interface UpdateLandingTemplateInput {
  id: Scalars['String']
  patch: LandingTemplateUpdateInput
}

export interface UserHuman {
  __typename?: 'UserHuman'
  /** Имя */
  firstName: Scalars['String']
  id: Scalars['ID']
  /** Фамилия */
  lastName?: Maybe<Scalars['String']>
  /** Отчество */
  middleName?: Maybe<Scalars['String']>
  rawFirstName: Scalars['String']
}

export interface UserProfileCustom {
  __typename?: 'UserProfileCustom'
  avatarUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  login: Scalars['String']
  name: Scalars['String']
  shortName: Scalars['String']
  uid: Scalars['Int']
}
