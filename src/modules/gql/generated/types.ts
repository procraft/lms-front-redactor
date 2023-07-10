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
  EMAIL = 'Email',
  MIDDLENAME = 'MiddleName'
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
  isSelected: Scalars['Boolean'];
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
  /** Кастомный признак типа записи */
  type: CatalogFieldValueType;
}

export interface CatalogFieldValueInput {
  fieldId: Scalars['Int'];
  fieldName?: Maybe<Scalars['String']>;
  optionName: Scalars['String'];
  optionValue?: Maybe<Scalars['String']>;
  isSelected?: Maybe<Scalars['Boolean']>;
  extraPay?: Maybe<Scalars['BigDecimal']>;
  extraPayPercentage?: Maybe<Scalars['BigDecimal']>;
  extraWork?: Maybe<Scalars['BigDecimal']>;
  extraWorkPercentage?: Maybe<Scalars['BigDecimal']>;
}

/** Тип поля */
export enum CatalogFieldValueType {
  /** Неизвестный тип */
  UNKNOWN = 'Unknown',
  /** Базовая покупка курса */
  COURSE = 'Course',
  /** Подписка */
  SUBSCRIPTION = 'Subscription'
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
}

export enum CourseSubKind {
  ABONNEMENT = 'Abonnement',
  CLUB = 'Club',
  SUBSCRIPTION = 'Subscription',
  WORKSHOP = 'Workshop',
  MASTERCLASS = 'MasterClass',
  WEBINAR = 'Webinar',
  FACULTY = 'Faculty',
  MARATHON = 'Marathon',
  INTENSIVE = 'Intensive',
  COURSE = 'Course'
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
  /** Количество свободных мест в потоке */
  computed?: Maybe<CourseTariffFlowPublicViewComputed>;
  priceDetails: CourseTariffPriceDetails;
  /** Условия продления курса */
  prolongation: CourseTariffProlongation;
}

export interface CourseTariffFlowPublicViewComputed {
  __typename?: 'CourseTariffFlowPublicViewComputed';
  capacityRemainder?: Maybe<Scalars['Int']>;
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
  /** Поэтапная оплата */
  partialPayment?: Maybe<Scalars['Boolean']>;
}

export interface CreateLandingTemplateInput {
  patch: LandingTemplateCreateInput;
}


export interface Email {
  __typename?: 'Email';
  email: Scalars['String'];
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
  __typename?: 'LandingCardField';
  name: CardFieldName;
  state: CardFieldState;
}

export interface LandingOrderPayload {
  __typename?: 'LandingOrderPayload';
  order?: Maybe<OrderCustom>;
}

export interface LandingSite {
  __typename?: 'LandingSite';
  id: Scalars['ID'];
  cardFields: Array<LandingCardField>;
  background?: Maybe<PhotoData>;
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
}

/** Роль пользователя */
export interface LandingViewerUserRoleFragment {
  __typename?: 'LandingViewerUserRole_Fragment';
  id?: Maybe<Scalars['ID']>;
  uid: Scalars['Int'];
  roles: LandingViewerUserRolesFragment;
  human: UserHuman;
  contacts: ContactsProfile;
}

/** Роли пользователя */
export interface LandingViewerUserRolesFragment {
  __typename?: 'LandingViewerUserRoles_Fragment';
  admin: Scalars['Boolean'];
  client: Scalars['Boolean'];
  master: Scalars['Boolean'];
  partner: Scalars['Boolean'];
}

export interface LandintTemplatePayload {
  __typename?: 'LandintTemplatePayload';
  landingTemplate: LandingTemplateFragment;
}

export interface MasterProfileCustom {
  __typename?: 'MasterProfileCustom';
  id: Scalars['ID'];
  uid: Scalars['Int'];
  label?: Maybe<Scalars['String']>;
  /** Ссылка на договор оферты */
  pdfContractOffer?: Maybe<Scalars['String']>;
  /** Ссылка на политику безопасности */
  pdfPrivacyPolicy?: Maybe<Scalars['String']>;
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
  deleteLandingTemplateCustom: Scalars['Boolean'];
  /** Создание шаблона */
  createLandingTemplate?: Maybe<LandintTemplatePayload>;
  /** Обновление шаблона */
  updateLandingTemplate?: Maybe<LandintTemplatePayload>;
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


export type MutationDeleteLandingTemplateCustomArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLandingTemplateArgs = {
  input: CreateLandingTemplateInput;
};


export type MutationUpdateLandingTemplateArgs = {
  input: UpdateLandingTemplateInput;
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
  master?: Maybe<OrderCatalogItemMaster>;
  course?: Maybe<CourseItem>;
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
}


export type OrderCatalogItemFragmentPromoCodeArgs = {
  code: Scalars['String'];
};


export type OrderCatalogItemFragmentPriceWithPromoCodeArgs = {
  code: Scalars['String'];
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
  catalogPrice?: Maybe<Scalars['Float']>;
  status: OrderStatus;
  paymentUrl?: Maybe<Scalars['String']>;
  /** Суммы поэтапной оплаты */
  partialPrices: Array<PartialPrice>;
  isMultiday?: Maybe<Scalars['Boolean']>;
  /** Признак того, что указана оплата в несколько этапов */
  partialPayment: Scalars['Boolean'];
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
  meetExpectation?: Maybe<MeetExpectation>;
  client: UserProfileCustom;
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

/** Этап оплаты */
export interface PartialPrice {
  __typename?: 'PartialPrice';
  /** Сумма */
  amount: Scalars['Float'];
  /** Крайний срок оплаты */
  deadline?: Maybe<Scalars['DateTime']>;
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

/** Текущий авторизованный пользователь */
export interface PrivateApiLandingViewer {
  __typename?: 'PrivateApiLandingViewer';
  id?: Maybe<Scalars['ID']>;
  /** Пользователь имеет право редактировать сайт */
  isEditor: Scalars['Boolean'];
  user?: Maybe<LandingViewerUserRoleFragment>;
  landing?: Maybe<LandingSitePrivate>;
}

export interface PromoCodeFragment {
  __typename?: 'PromoCode_Fragment';
  id: Scalars['ID'];
  code: Scalars['String'];
  discountPercent: Scalars['Float'];
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
}

export interface PublicMasterRole {
  __typename?: 'PublicMasterRole';
  uid: Scalars['Int'];
  master: MasterProfileCustom;
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
  /** Элемент каталога в заказе */
  orderCatalogItem?: Maybe<OrderCatalogItemFragment>;
  /** Список файлов и папок в заданной директории */
  staticFiles: Array<StaticFile>;
  /** Поиск промокода */
  promoCode?: Maybe<OrderCatalogItemFragment>;
}


export type QueryTemplatesArgs = {
  where?: Maybe<TemplateWhereInput>;
};


export type QueryTemplateArgs = {
  where: TemplateWhereUniqueInput;
};


export type QueryCoursesArgs = {
  code: Scalars['String'];
};


export type QueryOrderCatalogItemArgs = {
  gid: Scalars['ID'];
  code: Scalars['String'];
};


export type QueryStaticFilesArgs = {
  dir?: Maybe<Scalars['String']>;
};


export type QueryPromoCodeArgs = {
  catalogItemGid: Scalars['ID'];
  code: Scalars['String'];
  saleId?: Maybe<Scalars['ID']>;
};

/** Ответ для REST-запросов */
export interface RestApiPayload {
  __typename?: 'RestApiPayload';
  error: Scalars['Boolean'];
  message: Scalars['String'];
  token?: Maybe<Scalars['String']>;
}

export enum SaleBenefitKind {
  GIFTITEMS = 'GiftItems',
  ALLPRODUCTS = 'AllProducts',
  ALLCRAFTS = 'AllCrafts',
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
}

export interface SaleOrderPositionInput {
  positionId: Scalars['Int'];
  saleId: Scalars['Int'];
  saleName: Scalars['String'];
  benefitAmount: Scalars['BigDecimal'];
  benefitUnit: SaleBenefitUnit;
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
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  attachments?: Maybe<Array<PhotoDataInput>>;
  email?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  patchMessengers?: Maybe<Array<MessengerPatch>>;
  patchSocials?: Maybe<Array<SocialPatch>>;
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
  positions: Array<OrderPositionInput>;
  locationId?: Maybe<Scalars['Int']>;
  address?: Maybe<AddressInput>;
  deliveryId?: Maybe<Scalars['Int']>;
  selectedTime?: Maybe<Array<OrderSelectedTimeInput>>;
  isMultiday?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<PhotoDataInput>>;
  clientMutationId?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  /** Поэтапная оплата */
  partialPayment?: Maybe<Scalars['Boolean']>;
  patchMessengers?: Maybe<Array<MessengerPatch>>;
  patchSocials?: Maybe<Array<SocialPatch>>;
}

export interface UpdateLandingTemplateInput {
  id: Scalars['String'];
  patch: LandingTemplateUpdateInput;
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
  login: Scalars['String'];
  name: Scalars['String'];
  shortName: Scalars['String'];
  avatarUrl?: Maybe<Scalars['String']>;
}
