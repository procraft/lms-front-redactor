/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: number;
  DateTime: globalThis.Date;
  Json: any;
  /** desc */
  Upload: globalThis.File;
};

export interface AbonnementTransactionInput {
  abonnementId: Scalars['Int'];
  quantity: Scalars['BigDecimal'];
  price: Scalars['BigDecimal'];
}

export interface AddressInput {
  latitude: Scalars['BigDecimal'];
  longitude: Scalars['BigDecimal'];
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
}

export enum AuthMethod {
  SMS = 'Sms',
  EMAIL = 'Email',
  PASSWORD = 'Password',
  TIMELIMITTOKEN = 'TimeLimitToken'
}


export interface BookingClientInput {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<PhotoDataInput>>;
  patchMessengers?: Maybe<Array<MessengerPatch>>;
  patchSocials?: Maybe<Array<SocialPatch>>;
}

export enum CardFieldName {
  SOCIALTWITTER = 'SocialTwitter',
  SOCIALOK = 'SocialOk',
  SOCIALVK = 'SocialVk',
  SOCIALINSTAGRAM = 'SocialInstagram',
  SOCIALFACEBOOK = 'SocialFacebook',
  MESSENGERWHATSAPP = 'MessengerWhatsApp',
  MESSENGERVIBER = 'MessengerViber',
  MESSENGERTELEGRAM = 'MessengerTelegram',
  MESSENGERSKYPE = 'MessengerSkype',
  MESSENGERIMESSAGE = 'MessengerIMessage',
  MESSENGERHANGOUTS = 'MessengerHangouts',
  MESSENGERFACEBOOK = 'MessengerFacebook',
  ATTACHMENTS = 'Attachments',
  PHONE = 'Phone',
  CHILDPHONE = 'ChildPhone',
  COMMENT = 'Comment',
  EMAIL = 'Email',
  CHILDEMAIL = 'ChildEmail',
  LASTNAME = 'LastName',
  MIDDLENAME = 'MiddleName',
  ACCEPTAGREEMENTBYDEFAULT = 'AcceptAgreementByDefault',
  SEPARATECHECKBOXONDOCUMENT = 'SeparateCheckboxOnDocument',
  NOTIAMWILLBESTUDY = 'NotIamWillBeStudy'
}

export enum CardFieldState {
  REQUIRED = 'Required',
  ENABLED = 'Enabled',
  DISABLED = 'Disabled'
}

export interface CashPaymentAlias {
  __typename?: 'CashPaymentAlias';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  name: Scalars['String'];
  masterId: Scalars['Int'];
  description: Scalars['String'];
  showInCart: Scalars['Boolean'];
}

export interface CatalogFieldValue {
  __typename?: 'CatalogFieldValue';
  /** Первичный ключ элемента в рамках списка полей конкретного элемента каталога */
  uid: Scalars['String'];
  fieldId: Scalars['Int'];
  fieldName: Scalars['String'];
  optionName: Scalars['String'];
  optionValue?: Maybe<Scalars['String']>;
  parents?: Maybe<Scalars['String']>;
  isSelected: Scalars['Boolean'];
  isDisplayRemainder?: Maybe<Scalars['Boolean']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Используется для группировки по табам */
  groupName?: Maybe<Scalars['String']>;
  extraPay: Scalars['BigDecimal'];
  extraPayOriginal?: Maybe<Scalars['BigDecimal']>;
  extraPayPercentage: Scalars['BigDecimal'];
  extraWork: Scalars['BigDecimal'];
  extraWorkPercentage: Scalars['BigDecimal'];
  /** Количество оставшихся мест */
  availableCount?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['String']>;
  /** Кастомный признак типа записи */
  type: CatalogFieldValueType;
}

export interface CatalogFieldValueInput {
  fieldId: Scalars['Int'];
  fieldName?: Maybe<Scalars['String']>;
  optionName: Scalars['String'];
  optionValue?: Maybe<Scalars['String']>;
  parents?: Maybe<Scalars['String']>;
  isSelected?: Maybe<Scalars['Boolean']>;
  extraPay?: Maybe<Scalars['BigDecimal']>;
  extraPayPercentage?: Maybe<Scalars['BigDecimal']>;
  extraWork?: Maybe<Scalars['BigDecimal']>;
  extraWorkPercentage?: Maybe<Scalars['BigDecimal']>;
  params?: Maybe<CatalogFieldValueParamsInput>;
}

export interface CatalogFieldValueParamsInput {
  optionUid?: Maybe<Scalars['String']>;
  exactDay?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
}

/** Тип поля */
export enum CatalogFieldValueType {
  /** Неизвестный тип */
  UNKNOWN = 'Unknown',
  /** Базовая покупка курса */
  COURSE = 'Course',
  /** Подписка */
  SUBSCRIPTION = 'Subscription',
  /** Число занятий */
  LESSONCOUNT = 'LessonCount'
}

export interface CatalogItem {
  __typename?: 'CatalogItem';
  internalId?: Maybe<Scalars['Int']>;
}

export interface CheckoutPosition {
  __typename?: 'CheckoutPosition';
  uid: Scalars['Int'];
  catalogItemId?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<CheckoutProduct>>;
}

export interface CheckoutPriceDetails {
  __typename?: 'CheckoutPriceDetails';
  strokePrice?: Maybe<Scalars['BigDecimal']>;
  catalogPrice?: Maybe<Scalars['BigDecimal']>;
  price?: Maybe<Scalars['BigDecimal']>;
  saleDiscount?: Maybe<Scalars['BigDecimal']>;
  promoCodeDiscount?: Maybe<Scalars['BigDecimal']>;
  subscriptionPrice?: Maybe<Scalars['BigDecimal']>;
  subscriptionFirstPrice?: Maybe<Scalars['BigDecimal']>;
  hasInstallment: Scalars['Boolean'];
  denyReason?: Maybe<Scalars['String']>;
}

export interface CheckoutProduct {
  __typename?: 'CheckoutProduct';
  name: Scalars['String'];
  amount: Scalars['BigDecimal'];
}

export interface ClientForm {
  __typename?: 'ClientForm';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  name: Scalars['String'];
  orgId: Scalars['Int'];
  isDraft: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  kind: ClientFormKind;
}

export interface ClientFormAnswer {
  __typename?: 'ClientFormAnswer';
  uid: Scalars['Int'];
  responseId: Scalars['Int'];
  questionId: Scalars['Int'];
  answer?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  files?: Maybe<Array<FileMeta>>;
}

export interface ClientFormClientAnswer {
  questionId: Scalars['Int'];
  answer?: Maybe<Scalars['String']>;
  files?: Maybe<Array<FileMetaInput>>;
  variants?: Maybe<Array<Scalars['Int']>>;
}

export enum ClientFormKind {
  NEWMEMBER = 'NewMember',
  DEFAULT = 'Default'
}

export interface ClientFormQuestion {
  __typename?: 'ClientFormQuestion';
  uid: Scalars['Int'];
  formId: Scalars['Int'];
  question: Scalars['String'];
  isMandatory: Scalars['Boolean'];
  kind: ClientFormQuestionKind;
  createdAt: Scalars['DateTime'];
  orderIndex: Scalars['Float'];
  variants: Array<ClientFormQuestionVariant>;
}

export enum ClientFormQuestionKind {
  INT = 'Int',
  NUMBER = 'Number',
  FILELIST = 'FileList',
  MULTIVARIANT = 'MultiVariant',
  SINGLEVARIANT = 'SingleVariant',
  PARAGRAPH = 'Paragraph',
  SINGLELINE = 'SingleLine'
}

export interface ClientFormQuestionVariant {
  __typename?: 'ClientFormQuestionVariant';
  uid: Scalars['Int'];
  questionId: Scalars['Int'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  orderIndex: Scalars['Float'];
}

export interface ClientFormSubmitExtraFieldsInput {
  isDraft?: Maybe<Scalars['Boolean']>;
  answers: Array<ClientFormClientAnswer>;
}

export interface ClientFormSubmitExtraFieldsPayload {
  __typename?: 'ClientFormSubmitExtraFieldsPayload';
  clientForms: Array<ClientForm>;
}

/** Профиль клиента */
export interface ClientProfile {
  __typename?: 'ClientProfile';
  id: Scalars['ID'];
  hasSelfSubmittedOrder: Scalars['Boolean'];
}

/** Контакты пользователя */
export interface ContactsProfile {
  __typename?: 'ContactsProfile';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  primaryEmail?: Maybe<Scalars['String']>;
  primaryPhone?: Maybe<Scalars['String']>;
  phones: Array<Phone>;
  emails: Array<Email>;
  messengers: Array<Messenger>;
  socials: Array<Social>;
}

export enum CourseFlowBehaviour {
  MULTIPLE = 'Multiple',
  SINGLE = 'Single',
  CONTINUOUS = 'Continuous'
}

export interface CourseItem {
  __typename?: 'CourseItem';
  courseId: Scalars['Int'];
  flowId?: Maybe<Scalars['Int']>;
  tariffId?: Maybe<Scalars['Int']>;
  /** На сколько дней продление. Нужно для prolongation. */
  prolongationDays?: Maybe<Scalars['Int']>;
  financeDocumentIds: Array<Scalars['Int']>;
  courseMeta?: Maybe<CourseItemMeta>;
}

export interface CourseItemMeta {
  __typename?: 'CourseItemMeta';
  courseName: Scalars['String'];
  courseKind: CourseKind;
  courseSubKindLabel?: Maybe<LangRussianNoun>;
  courseSubKind: CourseSubKind;
  webinarStartsAt?: Maybe<Scalars['String']>;
  webinarHasPassed?: Maybe<Scalars['Boolean']>;
}

export enum CourseKind {
  ABONNEMENT = 'Abonnement',
  SUBSCRIPTION = 'Subscription',
  WEBINAR = 'Webinar',
  COURSE = 'Course'
}

export interface CoursePublicCustom {
  __typename?: 'CoursePublicCustom';
  id: Scalars['ID'];
  name: Scalars['String'];
  uid: Scalars['Int'];
  catalogItems?: Maybe<Array<OrderCatalogItemFragment>>;
  tariffs?: Maybe<Array<CourseTariffPublicCustom>>;
  tariffPerFlowDataItems?: Maybe<Array<CourseTariffFlowPublic>>;
  kind?: Maybe<CourseKind>;
  subKind?: Maybe<CourseSubKind>;
  subKindLabel?: Maybe<LangRussianNoun>;
}

export enum CourseSubKind {
  ABONNEMENT = 'Abonnement',
  CLUB = 'Club',
  SUBSCRIPTION = 'Subscription',
  FORUM = 'Forum',
  OTHER = 'Other',
  WORKSHOP = 'Workshop',
  MASTERCLASS = 'MasterClass',
  WEBINAR = 'Webinar',
  FACULTY = 'Faculty',
  PRERECORDING = 'PreRecording',
  MARATHON = 'Marathon',
  INTENSIVE = 'Intensive',
  COURSE = 'Course',
  TRAINING = 'Training'
}

export enum CourseTariffFlowBehaviour {
  MULTIPLE = 'Multiple',
  SINGLE = 'Single',
  CONTINUOUS = 'Continuous'
}

export interface CourseTariffFlowPublic {
  __typename?: 'CourseTariffFlowPublic';
  courseId: Scalars['Int'];
  courseTariffId: Scalars['Int'];
  flowId: Scalars['Int'];
  priceDetails: CourseTariffPriceDetails;
  /** Условия продления курса */
  prolongation: CourseTariffProlongation;
  marketingBenefitsComputed: Array<Scalars['String']>;
}

export interface CourseTariffPriceDetails {
  __typename?: 'CourseTariffPriceDetails';
  kind: CourseTariffPriceKind;
  /** Изменение цены с учетом даты */
  changeByTime?: Maybe<CourseTariffPriceDetailsChangeByTime>;
}

export interface CourseTariffPriceDetailsChangeByTime {
  __typename?: 'CourseTariffPriceDetailsChangeByTime';
  /** Учитывается только второй элемент и только свойство startsAt */
  items: Array<CourseTariffPriceDetailsChangeByTimeItem>;
}

export interface CourseTariffPriceDetailsChangeByTimeItem {
  __typename?: 'CourseTariffPriceDetailsChangeByTimeItem';
  priceMarketing: Scalars['Int'];
  priceReal: Scalars['Int'];
  startsAt?: Maybe<Scalars['DateTime']>;
  finishesAt?: Maybe<Scalars['DateTime']>;
}

export enum CourseTariffPriceKind {
  SUBSCRIPTION = 'Subscription',
  CHANGESBYSALES = 'ChangesBySales',
  CHANGESBYTIME = 'ChangesByTime',
  FIXEDBYOPTION = 'FixedByOption',
  FREEBYOPTION = 'FreeByOption',
  FIXED = 'Fixed',
  FREE = 'Free'
}

export interface CourseTariffProlongation {
  __typename?: 'CourseTariffProlongation';
  items: Array<CourseTariffProlongationItem>;
}

export interface CourseTariffProlongationItem {
  __typename?: 'CourseTariffProlongationItem';
  price: Scalars['Int'];
  periodInDays: Scalars['Int'];
}

export interface CourseTariffPublicCustom {
  __typename?: 'CourseTariffPublicCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  name: Scalars['String'];
  courseId: Scalars['Int'];
  position: Scalars['Int'];
  isActive: Scalars['Boolean'];
  ratesVisible: Scalars['Boolean'];
  withClientForm: Scalars['Boolean'];
  flowBehaviour: CourseTariffFlowBehaviour;
  marketingBenefits: Array<Scalars['String']>;
}

export interface CreateLandingOrderInput {
  positions: Array<OrderPositionInput>;
  locationId?: Maybe<Scalars['Int']>;
  address?: Maybe<AddressInput>;
  deliveryId?: Maybe<Scalars['Int']>;
  selectedTime?: Maybe<Array<OrderSelectedTimeInput>>;
  isMultiday?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  paymentSchemaUid?: Maybe<Scalars['String']>;
  paymentSchemaIndexes?: Maybe<Array<Scalars['Int']>>;
  /** Поэтапная оплата */
  partialPayment?: Maybe<Scalars['Boolean']>;
  sourceUrl: Scalars['String'];
  timezoneOffset?: Maybe<Scalars['Int']>;
  timezoneName?: Maybe<Scalars['String']>;
}

export interface CreateLandingTemplateInput {
  patch: LandingTemplateCreateInput;
}


export interface Email {
  __typename?: 'Email';
  email: Scalars['String'];
  primary: Scalars['Boolean'];
}

export interface EmailTransport {
  __typename?: 'EmailTransport';
  email: Scalars['String'];
}

export interface FileData {
  __typename?: 'FileData';
  url: Scalars['String'];
  fileName?: Maybe<Scalars['String']>;
}

export interface FileMeta {
  __typename?: 'FileMeta';
  size: Scalars['Int'];
  url: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  lastModified: Scalars['Float'];
  customInfo?: Maybe<Scalars['String']>;
}

export interface FileMetaInput {
  size: Scalars['Int'];
  url: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  lastModified: Scalars['Float'];
  customInfo?: Maybe<Scalars['String']>;
}

export interface FinanceDocument {
  __typename?: 'FinanceDocument';
  uid: Scalars['Int'];
  url: Scalars['String'];
  fileName: Scalars['String'];
  name: Scalars['String'];
  kind: Scalars['String'];
  required: Scalars['Boolean'];
}

export interface FlowPublicCustom {
  __typename?: 'FlowPublicCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  name: Scalars['String'];
  colorStyle: Scalars['String'];
  startsAt?: Maybe<Scalars['DateTime']>;
  finishesAt?: Maybe<Scalars['DateTime']>;
  kind: CourseFlowBehaviour;
}

export interface ItemOrderConditionData {
  __typename?: 'ItemOrderConditionData';
  shouldContainAll: Scalars['Boolean'];
  catalogItems: Array<OrderCatalogItemFragment>;
}


export interface LandingCardField {
  __typename?: 'LandingCardField';
  name: CardFieldName;
  state: CardFieldState;
}

export interface LandingOrderPayload {
  __typename?: 'LandingOrderPayload';
  order?: Maybe<OrderCustom>;
  denyReason?: Maybe<Scalars['String']>;
}

export interface LandingSite {
  __typename?: 'LandingSite';
  id: Scalars['ID'];
  registerAuthMethod?: Maybe<AuthMethod>;
  cardFields: Array<LandingCardField>;
  background?: Maybe<PhotoData>;
  extraScript?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
  showFeedbackWidget?: Maybe<Scalars['Boolean']>;
}

export interface LandingSitePrivate {
  __typename?: 'LandingSitePrivate';
  id: Scalars['ID'];
  uid: Scalars['Int'];
}

export interface LandingTemplateCreateInput {
  description?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  component: Scalars['String'];
  components: Scalars['Json'];
  props: Scalars['Json'];
  name: Scalars['String'];
}

export interface LandingTemplateUpdateInput {
  description?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['Json']>;
  props?: Maybe<Scalars['Json']>;
  name?: Maybe<Scalars['String']>;
}

export interface LandingTemplateFragment {
  __typename?: 'LandingTemplate__Fragment';
  foo?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  component: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  components: Scalars['Json'];
  props: Scalars['Json'];
  uri?: Maybe<Scalars['String']>;
  /** Иконка сайта */
  favicon?: Maybe<PhotoData>;
}

/** Роль пользователя */
export interface LandingViewerUserRoleFragment {
  __typename?: 'LandingViewerUserRole_Fragment';
  id?: Maybe<Scalars['ID']>;
  uid: Scalars['Int'];
  auths: Array<UserAuth>;
  human: UserHuman;
  contacts: ContactsProfile;
  client: ClientProfile;
}

export interface LandintTemplatePayload {
  __typename?: 'LandintTemplatePayload';
  landingTemplate: LandingTemplateFragment;
}

export enum LangGender {
  FEMININE = 'Feminine',
  MASCULINE = 'Masculine',
  NEUTER = 'Neuter'
}

export interface LangRussianNoun {
  __typename?: 'LangRussianNoun';
  valueNominative: Scalars['String'];
  valueGenitive: Scalars['String'];
  valueAccusative: Scalars['String'];
  valueDative: Scalars['String'];
  valueInstrumental: Scalars['String'];
  valuePrepositional: Scalars['String'];
  createdAt: Scalars['DateTime'];
  gender: LangGender;
}

export interface MasterClientProfileCommon {
  __typename?: 'MasterClientProfileCommon';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  extraFieldsAnswers: Array<ClientFormAnswer>;
  supervised: Array<UserProfileCustom>;
}

export interface MasterClientRole {
  __typename?: 'MasterClientRole';
  uid: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
}

export interface MasterProfileCustom {
  __typename?: 'MasterProfileCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<FinanceDocument>>;
  installmentComment: Scalars['String'];
  currency: Scalars['String'];
  cashPaymentAliases: Array<CashPaymentAlias>;
  /** Лого организации */
  orgPhoto?: Maybe<PhotoData>;
}

export enum MeetExpectation {
  /** Выше ожиданий */
  OVEREXPECTATION = 'OverExpectation',
  /** Как ожидалось */
  ASEXPECTED = 'AsExpected',
  /** Ниже ожиданий */
  BELOWEXPECTATION = 'BelowExpectation'
}

export interface Messenger {
  __typename?: 'Messenger';
  service: MessengerServices;
  account: Scalars['String'];
}

export interface MessengerPatch {
  name: MessengerServices;
  value?: Maybe<Scalars['String']>;
}

export enum MessengerServices {
  WHATSAPP = 'WhatsApp',
  VIBER = 'Viber',
  TELEGRAM = 'Telegram',
  MAH = 'Mah',
  SKYPE = 'Skype',
  IMESSAGE = 'IMessage',
  HANGOUTS = 'Hangouts',
  FACEBOOK = 'Facebook'
}

export interface Mutation {
  __typename?: 'Mutation';
  /** Создание заказа. Необходимо передать минимум одну позицию. */
  createLandingOrder?: Maybe<LandingOrderPayload>;
  /** Обновление заказа */
  updateLandingOrder?: Maybe<LandingOrderPayload>;
  /** Подтверждение заказа */
  submitLandingOrder?: Maybe<LandingOrderPayload>;
  /** Запрос СМС кода для авторизации для существующих клиентов */
  sendSmsCode?: Maybe<RestApiPayload>;
  /** Авторизация */
  login?: Maybe<RestApiPayload>;
  /** Регистрация или авторизация клиента по телефону */
  authClientByPhone?: Maybe<RestApiPayload>;
  /** Регистрация или авторизация кастомера по телефону */
  authCustomer?: Maybe<RestApiPayload>;
  deleteLandingTemplateCustom: Scalars['Boolean'];
  /** Создание шаблона */
  createLandingTemplate?: Maybe<LandintTemplatePayload>;
  /** Обновление шаблона */
  updateLandingTemplate?: Maybe<LandintTemplatePayload>;
  /** @deprecated Больше не нужно */
  clientFormSubmitExtraFields: ClientFormSubmitExtraFieldsPayload;
  /** Получаем подписанный УРЛ для загрузки файлов */
  s3getSignedUrl: Scalars['String'];
  /**
   * Загрузка файла
   * @deprecated Пока не реализовано
   */
  s3Upload: Scalars['String'];
}


export type MutationCreateLandingOrderArgs = {
  input: CreateLandingOrderInput;
};


export type MutationUpdateLandingOrderArgs = {
  input: UpdateLandingOrderInput;
};


export type MutationSubmitLandingOrderArgs = {
  input: SubmitLandingOrderInput;
};


export type MutationSendSmsCodeArgs = {
  token?: Maybe<Scalars['String']>;
  shouldExist?: Maybe<Scalars['Boolean']>;
  phone: Scalars['String'];
  promoCode?: Maybe<Scalars['String']>;
  promoCodeIsFromCookie?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginArgs = {
  phone: Scalars['String'];
  smsCode: Scalars['String'];
  smsToken: Scalars['String'];
};


export type MutationAuthClientByPhoneArgs = {
  phone: Scalars['String'];
  smsCode: Scalars['String'];
  smsToken: Scalars['String'];
};


export type MutationAuthCustomerArgs = {
  orgId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  smsCode?: Maybe<Scalars['String']>;
  smsToken?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationDeleteLandingTemplateCustomArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLandingTemplateArgs = {
  input: CreateLandingTemplateInput;
};


export type MutationUpdateLandingTemplateArgs = {
  input: UpdateLandingTemplateInput;
};


export type MutationClientFormSubmitExtraFieldsArgs = {
  input: ClientFormSubmitExtraFieldsInput;
};


export type MutationS3getSignedUrlArgs = {
  objectName: Scalars['String'];
  contentType: Scalars['String'];
};


export type MutationS3UploadArgs = {
  file: Scalars['Upload'];
};

export interface OrderCatalogItemMaster {
  __typename?: 'OrderCatalogItemMaster';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  currency: Scalars['String'];
}

export interface OrderCatalogItemOrg {
  __typename?: 'OrderCatalogItemOrg';
  contacts: OrderCatalogItemOrgContacts;
  sendingTransport?: Maybe<OrderCatalogItemOrgSendingTransport>;
  language?: Maybe<Scalars['String']>;
}

export interface OrderCatalogItemOrgContacts {
  __typename?: 'OrderCatalogItemOrgContacts';
  primaryEmail?: Maybe<Scalars['String']>;
}

export interface OrderCatalogItemOrgEmailTransport {
  __typename?: 'OrderCatalogItemOrgEmailTransport';
  email?: Maybe<Scalars['String']>;
}

export interface OrderCatalogItemOrgSendingTransport {
  __typename?: 'OrderCatalogItemOrgSendingTransport';
  emailTransport?: Maybe<OrderCatalogItemOrgEmailTransport>;
}

export interface OrderCatalogItemFragment {
  __typename?: 'OrderCatalogItem_Fragment';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  name: Scalars['String'];
  /** @deprecated Заголовки для формирования заказа */
  title: Array<Scalars['String']>;
  /** Цена */
  unitPrice?: Maybe<Scalars['Float']>;
  /** Старая цена */
  unitPriceOriginal?: Maybe<Scalars['Float']>;
  org?: Maybe<OrderCatalogItemOrg>;
  master?: Maybe<OrderCatalogItemMaster>;
  course?: Maybe<CourseItem>;
  /** Тариф */
  Tariff?: Maybe<CourseTariffPublicCustom>;
  sales?: Maybe<Array<SaleCustom>>;
  /** Примененный промокод */
  promoCode?: Maybe<PromoCodeFragment>;
  /** Стоимость при использовании промокода */
  priceWithPromoCode?: Maybe<Scalars['Float']>;
  /** Количество отзывов */
  reviewsCount?: Maybe<Scalars['Int']>;
  /** Отзывы */
  reviews?: Maybe<OrderReviewsConnection>;
  /** Опции с ценами */
  fieldValues?: Maybe<Array<CatalogFieldValue>>;
  partialPayment?: Maybe<PartialPayment>;
}


export type OrderCatalogItemFragmentPromoCodeArgs = {
  code: Scalars['String'];
};


export type OrderCatalogItemFragmentPriceWithPromoCodeArgs = {
  code: Scalars['String'];
};


export type OrderCatalogItemFragmentPartialPaymentArgs = {
  fieldValues?: Maybe<Scalars['String']>;
};

export interface OrderCondition {
  __typename?: 'OrderCondition';
  kind: Scalars['String'];
  data?: Maybe<OrderConditionData>;
}

export type OrderConditionData = ItemOrderConditionData | PriceOrderConditionData;

export interface OrderCustom {
  __typename?: 'OrderCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  price?: Maybe<Scalars['Float']>;
  /** Цена с учетом всех скидок */
  salePrice?: Maybe<Scalars['Float']>;
  /** Оригинальная цена без каких-либо скидок */
  strokePrice?: Maybe<Scalars['Float']>;
  /** Оригинальная цена без каких-либо скидок */
  catalogPrice?: Maybe<Scalars['Float']>;
  saleDiscount?: Maybe<Scalars['BigDecimal']>;
  promoCodeDiscount?: Maybe<Scalars['BigDecimal']>;
  availableBonusDiscount?: Maybe<Scalars['BigDecimal']>;
  subscriptionPrice?: Maybe<Scalars['BigDecimal']>;
  subscriptionFirstPrice?: Maybe<Scalars['BigDecimal']>;
  status: OrderStatus;
  paymentUrl?: Maybe<Scalars['String']>;
  /** Суммы поэтапной оплаты */
  partialPrices: Array<PartialPrice>;
  isMultiday?: Maybe<Scalars['Boolean']>;
  contractOfferIds: Array<Scalars['Int']>;
  /** Схема платы заказа */
  usedPartialPayment?: Maybe<UsedPartialPayment>;
  positions: Array<OrderPosition>;
  promoCode?: Maybe<PromoCodeFragment>;
}

export interface OrderPosition {
  __typename?: 'OrderPosition';
  uid: Scalars['Int'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
  usedCapacity: Scalars['Int'];
  price?: Maybe<Scalars['Float']>;
  work?: Maybe<Scalars['Float']>;
  catalogItemId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  sales: Array<SaleOrderPosition>;
  partialPayment: PartialPayment;
  item?: Maybe<CatalogItem>;
  checkoutProducts?: Maybe<Array<CheckoutProduct>>;
}

export interface OrderPositionInput {
  name: Scalars['String'];
  quantity: Scalars['BigDecimal'];
  usedCapacity: Scalars['Int'];
  price?: Maybe<Scalars['BigDecimal']>;
  work?: Maybe<Scalars['BigDecimal']>;
  fieldValues?: Maybe<Array<CatalogFieldValueInput>>;
  abonnementTransactions?: Maybe<Array<AbonnementTransactionInput>>;
  catalogItemId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  sales?: Maybe<Array<SaleOrderPositionInput>>;
  id?: Maybe<Scalars['Int']>;
  subscriptionPeriod?: Maybe<TimeUnitWithAmountInput>;
}

export interface OrderReviewCustom {
  __typename?: 'OrderReviewCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  rating: Scalars['Int'];
  timeCreated: Scalars['DateTime'];
  text?: Maybe<Scalars['String']>;
  reply?: Maybe<Scalars['String']>;
  meetExpectation?: Maybe<MeetExpectation>;
  client: Scalars['String'];
}

export interface OrderReviewsConnection {
  __typename?: 'OrderReviewsConnection';
  edges?: Maybe<Array<Maybe<OrderReviewsEdge>>>;
}

export interface OrderReviewsEdge {
  __typename?: 'OrderReviewsEdge';
  node: OrderReviewCustom;
}

export interface OrderSelectedTimeInput {
  timeFrom: Scalars['String'];
  timeTo: Scalars['String'];
}

export enum OrderStatus {
  FAKE = 'Fake',
  NOSHOW = 'NoShow',
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed',
  AUTORENEWFAILED = 'AutoRenewFailed',
  AUTORENEW = 'AutoRenew',
  DONE = 'Done',
  PAUSED = 'Paused',
  INPROGRESS = 'InProgress',
  APPROVED = 'Approved',
  OFFERACCEPTING = 'OfferAccepting',
  TIMEAPPROVING = 'TimeApproving',
  MASTERAPPROVING = 'MasterApproving',
  NEW = 'New',
  TEASER = 'Teaser',
  LEAD = 'Lead',
  DRAFT = 'Draft'
}

export interface PartialPayment {
  __typename?: 'PartialPayment';
  kind: Scalars['String'];
  complex?: Maybe<Array<PartialPaymentComplexItem>>;
  complexDefaultUid?: Maybe<Scalars['String']>;
  firstPayment?: Maybe<Scalars['BigDecimal']>;
}

export interface PartialPaymentComplexItem {
  __typename?: 'PartialPaymentComplexItem';
  uid: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  triggerKind: Scalars['String'];
}

/** Этап оплаты */
export interface PartialPrice {
  __typename?: 'PartialPrice';
  /** Сумма */
  amount: Scalars['Float'];
  /** Крайний срок оплаты */
  deadline?: Maybe<Scalars['DateTime']>;
  selectionUnitNames: Array<Scalars['String']>;
  priority: Scalars['Int'];
}

export interface Phone {
  __typename?: 'Phone';
  number: Scalars['String'];
}

export interface PhotoData {
  __typename?: 'PhotoData';
  url: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
}

export interface PhotoDataInput {
  url: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
}

export interface PriceOrderConditionData {
  __typename?: 'PriceOrderConditionData';
  kind: PriceOrderConditionKind;
  from?: Maybe<Scalars['BigDecimal']>;
  to?: Maybe<Scalars['BigDecimal']>;
}

export enum PriceOrderConditionKind {
  FROM = 'From',
  TO = 'To',
  BETWEEN = 'Between'
}

/** Текущий авторизованный пользователь */
export interface PrivateApiLandingViewer {
  __typename?: 'PrivateApiLandingViewer';
  id: Scalars['ID'];
  /** Пользователь имеет право редактировать сайт */
  isEditor: Scalars['Boolean'];
  user?: Maybe<LandingViewerUserRoleFragment>;
  landing?: Maybe<LandingSitePrivate>;
  masterClientCommon?: Maybe<MasterClientProfileCommon>;
}

export interface PromoCodeFragment {
  __typename?: 'PromoCode_Fragment';
  id: Scalars['ID'];
  code: Scalars['String'];
  value: Scalars['Float'];
  unit: Scalars['String'];
  activeFrom?: Maybe<Scalars['String']>;
  activeTill?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
}

/** Основной объект просмотра сайта */
export interface PublicLandingViewer {
  __typename?: 'PublicLandingViewer';
  id: Scalars['ID'];
  /** Prevent import * as Types error */
  foo?: Maybe<Scalars['Boolean']>;
  master: PublicMasterRole;
  landing?: Maybe<LandingSite>;
  checkoutPriceDetails?: Maybe<CheckoutPriceDetails>;
  registerAuthMethod?: Maybe<AuthMethod>;
  checkoutPositions: Array<CheckoutPosition>;
  sendingTransport?: Maybe<SendingTransport>;
  org?: Maybe<ViewerOrgProfile>;
}

export interface PublicMasterRole {
  __typename?: 'PublicMasterRole';
  uid: Scalars['Int'];
  hasPromoCode: Scalars['Boolean'];
  master: MasterProfileCustom;
  contacts: ContactsProfile;
  sendingTransport?: Maybe<SendingTransport>;
  /** Ссылка на приложение студента */
  studentUrl?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  /** Текущий авторизованный пользователь */
  me?: Maybe<PrivateApiLandingViewer>;
  viewer: PublicLandingViewer;
  /** Список шаблонов */
  templates: Array<LandingTemplateFragment>;
  /** Шаблон */
  template?: Maybe<LandingTemplateFragment>;
  courses: Array<CoursePublicCustom>;
  course?: Maybe<CoursePublicCustom>;
  /** Элемент каталога в заказе */
  orderCatalogItem?: Maybe<OrderCatalogItemFragment>;
  /** Список файлов и папок в заданной директории */
  staticFiles: Array<StaticFile>;
  /** Вопросы анкет для новых пользователей */
  extraFieldsQuestions?: Maybe<Array<ClientFormQuestion>>;
  /** Поиск промокода */
  promoCode?: Maybe<OrderCatalogItemFragment>;
}


export type QueryViewerArgs = {
  positions?: Maybe<Array<Maybe<OrderPositionInput>>>;
  saleId?: Maybe<Scalars['Int']>;
  promoCode?: Maybe<Scalars['String']>;
};


export type QueryTemplatesArgs = {
  where?: Maybe<TemplateWhereInput>;
};


export type QueryTemplateArgs = {
  where: TemplateWhereUniqueInput;
};


export type QueryCoursesArgs = {
  code: Scalars['String'];
};


export type QueryCourseArgs = {
  id: Scalars['Int'];
  code: Scalars['String'];
};


export type QueryOrderCatalogItemArgs = {
  gid: Scalars['ID'];
  code: Scalars['String'];
  fieldValues?: Maybe<Scalars['String']>;
};


export type QueryStaticFilesArgs = {
  dir?: Maybe<Scalars['String']>;
};


export type QueryPromoCodeArgs = {
  catalogItemGid: Scalars['ID'];
  fieldValues?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  saleId?: Maybe<Scalars['ID']>;
};

/** Ответ для REST-запросов */
export interface RestApiPayload {
  __typename?: 'RestApiPayload';
  error: Scalars['Boolean'];
  message: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  methods?: Maybe<Array<Scalars['String']>>;
}

export enum SaleBenefitKind {
  GIFTITEMS = 'GiftItems',
  ALLPRODUCTS = 'AllProducts',
  ALLCRAFTS = 'AllCrafts',
  ALLITEMS = 'AllItems',
  DISCOUNTITEMS = 'DiscountItems',
  CONDITIONITEMS = 'ConditionItems'
}

export enum SaleBenefitUnit {
  MONEY = 'Money',
  PERCENT = 'Percent'
}

/** Скидка */
export interface SaleCustom {
  __typename?: 'SaleCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  benefitKind: SaleBenefitKind;
  benefitItems: Array<OrderCatalogItemFragment>;
  benefitAmount?: Maybe<Scalars['Float']>;
  benefitUnit?: Maybe<SaleBenefitUnit>;
  orderCondition?: Maybe<OrderCondition>;
}

export interface SaleOrderPosition {
  __typename?: 'SaleOrderPosition';
  positionId: Scalars['Int'];
  saleId: Scalars['Int'];
  saleName: Scalars['String'];
  benefitAmount: Scalars['Float'];
  benefitUnit: SaleBenefitUnit;
  isBest?: Maybe<Scalars['Boolean']>;
}

export interface SaleOrderPositionInput {
  positionId: Scalars['Int'];
  saleId: Scalars['Int'];
  saleName: Scalars['String'];
  benefitAmount: Scalars['BigDecimal'];
  benefitUnit: SaleBenefitUnit;
  isBest?: Maybe<Scalars['Boolean']>;
}

export interface SendingTransport {
  __typename?: 'SendingTransport';
  emailTransport?: Maybe<EmailTransport>;
  telegramTransport?: Maybe<TelegramTransport>;
  whatsAppTransport?: Maybe<WhatsAppTransport>;
}

export interface Social {
  __typename?: 'Social';
  network: SocialNetworks;
  account: Scalars['String'];
}

export enum SocialNetworks {
  TWITTER = 'Twitter',
  OK = 'Ok',
  VK = 'Vk',
  INSTAGRAM = 'Instagram',
  FACEBOOK = 'Facebook'
}

export interface SocialPatch {
  name: SocialNetworks;
  value?: Maybe<Scalars['String']>;
}

/** Статический файл или папка */
export interface StaticFile {
  __typename?: 'StaticFile';
  type: StaticFileType;
  name: Scalars['String'];
  relativePath: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
}

export enum StaticFileType {
  DIRECTORY = 'Directory',
  FILE = 'File'
}

export interface SubmitLandingOrderInput {
  orderId: Scalars['Int'];
  customerId?: Maybe<Scalars['Int']>;
  customerToken?: Maybe<Scalars['String']>;
  customerLogin?: Maybe<Scalars['String']>;
  isSupervisor: Scalars['Boolean'];
  extraFields: Array<ClientFormClientAnswer>;
  client: BookingClientInput;
  customer?: Maybe<BookingClientInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
}

export interface TelegramTransport {
  __typename?: 'TelegramTransport';
  botUsername: Scalars['String'];
}

export interface TemplateWhereInput {
  parentID?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** УРЛ шаблона */
  uri?: Maybe<Scalars['String']>;
}

export interface TemplateWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
  /** УРЛ шаблона */
  uri?: Maybe<Scalars['String']>;
}

export enum TimeUnit {
  MONTHS = 'Months',
  WEEKS = 'Weeks',
  DAYS = 'Days',
  HOURS = 'Hours',
  MINUTES = 'Minutes'
}

export interface TimeUnitWithAmount {
  __typename?: 'TimeUnitWithAmount';
  unit: TimeUnit;
  amount: Scalars['Int'];
}

export interface TimeUnitWithAmountInput {
  unit: TimeUnit;
  amount: Scalars['Int'];
}

export interface UpdateLandingOrderInput {
  orderId: Scalars['Int'];
  client: BookingClientInput;
  positions: Array<OrderPositionInput>;
  locationId?: Maybe<Scalars['Int']>;
  address?: Maybe<AddressInput>;
  deliveryId?: Maybe<Scalars['Int']>;
  customParams?: Maybe<Scalars['String']>;
  selectedTime?: Maybe<Array<OrderSelectedTimeInput>>;
  isMultiday?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  paymentSchemaUid?: Maybe<Scalars['String']>;
  paymentSchemaIndexes?: Maybe<Array<Scalars['Int']>>;
  /** Поэтапная оплата */
  partialPayment?: Maybe<Scalars['Boolean']>;
}

export interface UpdateLandingTemplateInput {
  id: Scalars['String'];
  patch: LandingTemplateUpdateInput;
}


export interface UsedPartialPayment {
  __typename?: 'UsedPartialPayment';
  kind: Scalars['String'];
  complex?: Maybe<UsedPartialPaymentComplex>;
}

export interface UsedPartialPaymentComplex {
  __typename?: 'UsedPartialPaymentComplex';
  item: PartialPaymentComplexItem;
  firstPaymentIndexes?: Maybe<Array<Scalars['Int']>>;
}

export interface UserAuth {
  __typename?: 'UserAuth';
  method: Scalars['String'];
  key: Scalars['String'];
}

export interface UserHuman {
  __typename?: 'UserHuman';
  id: Scalars['ID'];
  rawFirstName: Scalars['String'];
  /** Имя */
  firstName: Scalars['String'];
  /** Отчество */
  middleName?: Maybe<Scalars['String']>;
  /** Фамилия */
  lastName?: Maybe<Scalars['String']>;
}

export interface UserProfileCustom {
  __typename?: 'UserProfileCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  auths: Array<UserAuth>;
  name: Scalars['String'];
  shortName: Scalars['String'];
  avatarUrl?: Maybe<Scalars['String']>;
  client?: Maybe<MasterClientRole>;
}

export interface ViewerOrgProfile {
  __typename?: 'ViewerOrgProfile';
  language?: Maybe<Scalars['String']>;
}

export interface WhatsAppTransport {
  __typename?: 'WhatsAppTransport';
  name: Scalars['String'];
}
