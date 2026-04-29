import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CashPaymentAliasKeySpecifier = ('id' | 'uid' | 'name' | 'masterId' | 'description' | 'showInCart' | CashPaymentAliasKeySpecifier)[];
export type CashPaymentAliasFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	masterId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	showInCart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatalogFieldValueKeySpecifier = ('uid' | 'fieldId' | 'fieldName' | 'optionName' | 'optionValue' | 'parents' | 'isSelected' | 'isDisplayRemainder' | 'isDefault' | 'groupName' | 'extraPay' | 'extraPayOriginal' | 'extraPayPercentage' | 'extraWork' | 'extraWorkPercentage' | 'availableCount' | 'params' | 'type' | CatalogFieldValueKeySpecifier)[];
export type CatalogFieldValueFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldId?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	optionName?: FieldPolicy<any> | FieldReadFunction<any>,
	optionValue?: FieldPolicy<any> | FieldReadFunction<any>,
	parents?: FieldPolicy<any> | FieldReadFunction<any>,
	isSelected?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisplayRemainder?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	groupName?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPay?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPayOriginal?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPayPercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	extraWork?: FieldPolicy<any> | FieldReadFunction<any>,
	extraWorkPercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	availableCount?: FieldPolicy<any> | FieldReadFunction<any>,
	params?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatalogItemKeySpecifier = ('internalId' | CatalogItemKeySpecifier)[];
export type CatalogItemFieldPolicy = {
	internalId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutPositionKeySpecifier = ('uid' | 'catalogItemId' | 'products' | CheckoutPositionKeySpecifier)[];
export type CheckoutPositionFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogItemId?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutPriceDetailsKeySpecifier = ('strokePrice' | 'catalogPrice' | 'price' | 'saleDiscount' | 'promoCodeDiscount' | 'subscriptionPrice' | 'subscriptionFirstPrice' | 'hasInstallment' | 'denyReason' | CheckoutPriceDetailsKeySpecifier)[];
export type CheckoutPriceDetailsFieldPolicy = {
	strokePrice?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	saleDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCodeDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionFirstPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	hasInstallment?: FieldPolicy<any> | FieldReadFunction<any>,
	denyReason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutProductKeySpecifier = ('name' | 'amount' | CheckoutProductKeySpecifier)[];
export type CheckoutProductFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientFormKeySpecifier = ('id' | 'uid' | 'name' | 'orgId' | 'isDraft' | 'createdAt' | 'deletedAt' | 'kind' | ClientFormKeySpecifier)[];
export type ClientFormFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgId?: FieldPolicy<any> | FieldReadFunction<any>,
	isDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientFormAnswerKeySpecifier = ('uid' | 'responseId' | 'questionId' | 'answer' | 'variantId' | 'createdAt' | 'files' | ClientFormAnswerKeySpecifier)[];
export type ClientFormAnswerFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	responseId?: FieldPolicy<any> | FieldReadFunction<any>,
	questionId?: FieldPolicy<any> | FieldReadFunction<any>,
	answer?: FieldPolicy<any> | FieldReadFunction<any>,
	variantId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientFormQuestionKeySpecifier = ('uid' | 'formId' | 'question' | 'isMandatory' | 'kind' | 'createdAt' | 'orderIndex' | 'variants' | ClientFormQuestionKeySpecifier)[];
export type ClientFormQuestionFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	question?: FieldPolicy<any> | FieldReadFunction<any>,
	isMandatory?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	orderIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientFormQuestionVariantKeySpecifier = ('uid' | 'questionId' | 'name' | 'createdAt' | 'orderIndex' | ClientFormQuestionVariantKeySpecifier)[];
export type ClientFormQuestionVariantFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	questionId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	orderIndex?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientFormSubmitExtraFieldsPayloadKeySpecifier = ('clientForms' | ClientFormSubmitExtraFieldsPayloadKeySpecifier)[];
export type ClientFormSubmitExtraFieldsPayloadFieldPolicy = {
	clientForms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientProfileKeySpecifier = ('id' | 'hasSelfSubmittedOrder' | ClientProfileKeySpecifier)[];
export type ClientProfileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	hasSelfSubmittedOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactsProfileKeySpecifier = ('id' | 'email' | 'phone' | 'primaryEmail' | 'primaryPhone' | 'phones' | 'emails' | 'messengers' | 'socials' | ContactsProfileKeySpecifier)[];
export type ContactsProfileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	phones?: FieldPolicy<any> | FieldReadFunction<any>,
	emails?: FieldPolicy<any> | FieldReadFunction<any>,
	messengers?: FieldPolicy<any> | FieldReadFunction<any>,
	socials?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseItemKeySpecifier = ('courseId' | 'flowId' | 'tariffId' | 'prolongationDays' | 'financeDocumentIds' | 'courseMeta' | CourseItemKeySpecifier)[];
export type CourseItemFieldPolicy = {
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	flowId?: FieldPolicy<any> | FieldReadFunction<any>,
	tariffId?: FieldPolicy<any> | FieldReadFunction<any>,
	prolongationDays?: FieldPolicy<any> | FieldReadFunction<any>,
	financeDocumentIds?: FieldPolicy<any> | FieldReadFunction<any>,
	courseMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseItemMetaKeySpecifier = ('courseName' | 'courseKind' | 'courseSubKindLabel' | 'courseSubKind' | 'webinarStartsAt' | 'webinarHasPassed' | CourseItemMetaKeySpecifier)[];
export type CourseItemMetaFieldPolicy = {
	courseName?: FieldPolicy<any> | FieldReadFunction<any>,
	courseKind?: FieldPolicy<any> | FieldReadFunction<any>,
	courseSubKindLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	courseSubKind?: FieldPolicy<any> | FieldReadFunction<any>,
	webinarStartsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	webinarHasPassed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoursePublicCustomKeySpecifier = ('id' | 'name' | 'uid' | 'catalogItems' | 'tariffs' | 'tariffPerFlowDataItems' | 'kind' | 'subKind' | 'subKindLabel' | CoursePublicCustomKeySpecifier)[];
export type CoursePublicCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogItems?: FieldPolicy<any> | FieldReadFunction<any>,
	tariffs?: FieldPolicy<any> | FieldReadFunction<any>,
	tariffPerFlowDataItems?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	subKind?: FieldPolicy<any> | FieldReadFunction<any>,
	subKindLabel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffFlowPublicKeySpecifier = ('courseId' | 'courseTariffId' | 'flowId' | 'priceDetails' | 'prolongation' | 'marketingBenefitsComputed' | CourseTariffFlowPublicKeySpecifier)[];
export type CourseTariffFlowPublicFieldPolicy = {
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	courseTariffId?: FieldPolicy<any> | FieldReadFunction<any>,
	flowId?: FieldPolicy<any> | FieldReadFunction<any>,
	priceDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	prolongation?: FieldPolicy<any> | FieldReadFunction<any>,
	marketingBenefitsComputed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffPriceDetailsKeySpecifier = ('kind' | 'changeByTime' | CourseTariffPriceDetailsKeySpecifier)[];
export type CourseTariffPriceDetailsFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	changeByTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffPriceDetailsChangeByTimeKeySpecifier = ('items' | CourseTariffPriceDetailsChangeByTimeKeySpecifier)[];
export type CourseTariffPriceDetailsChangeByTimeFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffPriceDetailsChangeByTimeItemKeySpecifier = ('priceMarketing' | 'priceReal' | 'startsAt' | 'finishesAt' | CourseTariffPriceDetailsChangeByTimeItemKeySpecifier)[];
export type CourseTariffPriceDetailsChangeByTimeItemFieldPolicy = {
	priceMarketing?: FieldPolicy<any> | FieldReadFunction<any>,
	priceReal?: FieldPolicy<any> | FieldReadFunction<any>,
	startsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	finishesAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffProlongationKeySpecifier = ('items' | CourseTariffProlongationKeySpecifier)[];
export type CourseTariffProlongationFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffProlongationItemKeySpecifier = ('price' | 'periodInDays' | CourseTariffProlongationItemKeySpecifier)[];
export type CourseTariffProlongationItemFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	periodInDays?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffPublicCustomKeySpecifier = ('id' | 'uid' | 'name' | 'courseId' | 'position' | 'isActive' | 'ratesVisible' | 'withClientForm' | 'flowBehaviour' | 'marketingBenefits' | CourseTariffPublicCustomKeySpecifier)[];
export type CourseTariffPublicCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	ratesVisible?: FieldPolicy<any> | FieldReadFunction<any>,
	withClientForm?: FieldPolicy<any> | FieldReadFunction<any>,
	flowBehaviour?: FieldPolicy<any> | FieldReadFunction<any>,
	marketingBenefits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailKeySpecifier = ('email' | 'primary' | EmailKeySpecifier)[];
export type EmailFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	primary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailTransportKeySpecifier = ('email' | EmailTransportKeySpecifier)[];
export type EmailTransportFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileDataKeySpecifier = ('url' | 'fileName' | FileDataKeySpecifier)[];
export type FileDataFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileMetaKeySpecifier = ('size' | 'url' | 'mimeType' | 'name' | 'lastModified' | 'customInfo' | FileMetaKeySpecifier)[];
export type FileMetaFieldPolicy = {
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModified?: FieldPolicy<any> | FieldReadFunction<any>,
	customInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinanceDocumentKeySpecifier = ('uid' | 'url' | 'fileName' | 'name' | 'kind' | 'required' | FinanceDocumentKeySpecifier)[];
export type FinanceDocumentFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowPublicCustomKeySpecifier = ('id' | 'uid' | 'name' | 'colorStyle' | 'startsAt' | 'finishesAt' | 'kind' | FlowPublicCustomKeySpecifier)[];
export type FlowPublicCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	colorStyle?: FieldPolicy<any> | FieldReadFunction<any>,
	startsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	finishesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemOrderConditionDataKeySpecifier = ('shouldContainAll' | 'catalogItems' | ItemOrderConditionDataKeySpecifier)[];
export type ItemOrderConditionDataFieldPolicy = {
	shouldContainAll?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogItems?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingCardFieldKeySpecifier = ('name' | 'state' | LandingCardFieldKeySpecifier)[];
export type LandingCardFieldFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingOrderPayloadKeySpecifier = ('order' | 'denyReason' | LandingOrderPayloadKeySpecifier)[];
export type LandingOrderPayloadFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	denyReason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingSiteKeySpecifier = ('id' | 'registerAuthMethod' | 'cardFields' | 'background' | 'extraScript' | 'verificationCode' | 'showFeedbackWidget' | LandingSiteKeySpecifier)[];
export type LandingSiteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	registerAuthMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	cardFields?: FieldPolicy<any> | FieldReadFunction<any>,
	background?: FieldPolicy<any> | FieldReadFunction<any>,
	extraScript?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationCode?: FieldPolicy<any> | FieldReadFunction<any>,
	showFeedbackWidget?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingSitePrivateKeySpecifier = ('id' | 'uid' | LandingSitePrivateKeySpecifier)[];
export type LandingSitePrivateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingTemplate__FragmentKeySpecifier = ('foo' | 'id' | 'name' | 'component' | 'description' | 'components' | 'props' | 'uri' | 'favicon' | LandingTemplate__FragmentKeySpecifier)[];
export type LandingTemplate__FragmentFieldPolicy = {
	foo?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	props?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	favicon?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingViewerUserRole_FragmentKeySpecifier = ('id' | 'uid' | 'auths' | 'human' | 'contacts' | 'client' | LandingViewerUserRole_FragmentKeySpecifier)[];
export type LandingViewerUserRole_FragmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	auths?: FieldPolicy<any> | FieldReadFunction<any>,
	human?: FieldPolicy<any> | FieldReadFunction<any>,
	contacts?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandintTemplatePayloadKeySpecifier = ('landingTemplate' | LandintTemplatePayloadKeySpecifier)[];
export type LandintTemplatePayloadFieldPolicy = {
	landingTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LangRussianNounKeySpecifier = ('valueNominative' | 'valueGenitive' | 'valueAccusative' | 'valueDative' | 'valueInstrumental' | 'valuePrepositional' | 'createdAt' | 'gender' | LangRussianNounKeySpecifier)[];
export type LangRussianNounFieldPolicy = {
	valueNominative?: FieldPolicy<any> | FieldReadFunction<any>,
	valueGenitive?: FieldPolicy<any> | FieldReadFunction<any>,
	valueAccusative?: FieldPolicy<any> | FieldReadFunction<any>,
	valueDative?: FieldPolicy<any> | FieldReadFunction<any>,
	valueInstrumental?: FieldPolicy<any> | FieldReadFunction<any>,
	valuePrepositional?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MasterClientProfileCommonKeySpecifier = ('id' | 'uid' | 'extraFieldsAnswers' | 'supervised' | MasterClientProfileCommonKeySpecifier)[];
export type MasterClientProfileCommonFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	extraFieldsAnswers?: FieldPolicy<any> | FieldReadFunction<any>,
	supervised?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MasterClientRoleKeySpecifier = ('uid' | 'userId' | MasterClientRoleKeySpecifier)[];
export type MasterClientRoleFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MasterProfileCustomKeySpecifier = ('id' | 'uid' | 'label' | 'documents' | 'installmentComment' | 'currency' | 'cashPaymentAliases' | 'orgPhoto' | MasterProfileCustomKeySpecifier)[];
export type MasterProfileCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	documents?: FieldPolicy<any> | FieldReadFunction<any>,
	installmentComment?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	cashPaymentAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	orgPhoto?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessengerKeySpecifier = ('service' | 'account' | MessengerKeySpecifier)[];
export type MessengerFieldPolicy = {
	service?: FieldPolicy<any> | FieldReadFunction<any>,
	account?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createLandingOrder' | 'updateLandingOrder' | 'submitLandingOrder' | 'sendSmsCode' | 'login' | 'authClientByPhone' | 'authCustomer' | 'deleteLandingTemplateCustom' | 'createLandingTemplate' | 'updateLandingTemplate' | 'clientFormSubmitExtraFields' | 's3getSignedUrl' | 's3Upload' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createLandingOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLandingOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	submitLandingOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	sendSmsCode?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	authClientByPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	authCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLandingTemplateCustom?: FieldPolicy<any> | FieldReadFunction<any>,
	createLandingTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLandingTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	clientFormSubmitExtraFields?: FieldPolicy<any> | FieldReadFunction<any>,
	s3getSignedUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	s3Upload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItemMasterKeySpecifier = ('id' | 'uid' | 'currency' | OrderCatalogItemMasterKeySpecifier)[];
export type OrderCatalogItemMasterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItemOrgKeySpecifier = ('contacts' | 'sendingTransport' | 'language' | OrderCatalogItemOrgKeySpecifier)[];
export type OrderCatalogItemOrgFieldPolicy = {
	contacts?: FieldPolicy<any> | FieldReadFunction<any>,
	sendingTransport?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItemOrgContactsKeySpecifier = ('primaryEmail' | OrderCatalogItemOrgContactsKeySpecifier)[];
export type OrderCatalogItemOrgContactsFieldPolicy = {
	primaryEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItemOrgEmailTransportKeySpecifier = ('email' | OrderCatalogItemOrgEmailTransportKeySpecifier)[];
export type OrderCatalogItemOrgEmailTransportFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItemOrgSendingTransportKeySpecifier = ('emailTransport' | OrderCatalogItemOrgSendingTransportKeySpecifier)[];
export type OrderCatalogItemOrgSendingTransportFieldPolicy = {
	emailTransport?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItem_FragmentKeySpecifier = ('id' | 'uid' | 'name' | 'title' | 'unitPrice' | 'unitPriceOriginal' | 'org' | 'master' | 'course' | 'Tariff' | 'sales' | 'promoCode' | 'priceWithPromoCode' | 'reviewsCount' | 'reviews' | 'fieldValues' | 'partialPayment' | OrderCatalogItem_FragmentKeySpecifier)[];
export type OrderCatalogItem_FragmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPriceOriginal?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	master?: FieldPolicy<any> | FieldReadFunction<any>,
	course?: FieldPolicy<any> | FieldReadFunction<any>,
	Tariff?: FieldPolicy<any> | FieldReadFunction<any>,
	sales?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	priceWithPromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldValues?: FieldPolicy<any> | FieldReadFunction<any>,
	partialPayment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderConditionKeySpecifier = ('kind' | 'data' | OrderConditionKeySpecifier)[];
export type OrderConditionFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCustomKeySpecifier = ('id' | 'uid' | 'price' | 'salePrice' | 'strokePrice' | 'catalogPrice' | 'saleDiscount' | 'promoCodeDiscount' | 'availableBonusDiscount' | 'subscriptionPrice' | 'subscriptionFirstPrice' | 'status' | 'paymentUrl' | 'partialPrices' | 'isMultiday' | 'contractOfferIds' | 'usedPartialPayment' | 'positions' | 'promoCode' | OrderCustomKeySpecifier)[];
export type OrderCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	salePrice?: FieldPolicy<any> | FieldReadFunction<any>,
	strokePrice?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	saleDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCodeDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	availableBonusDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionFirstPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	partialPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	isMultiday?: FieldPolicy<any> | FieldReadFunction<any>,
	contractOfferIds?: FieldPolicy<any> | FieldReadFunction<any>,
	usedPartialPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderPositionKeySpecifier = ('uid' | 'name' | 'quantity' | 'usedCapacity' | 'price' | 'work' | 'catalogItemId' | 'parentId' | 'sales' | 'partialPayment' | 'item' | 'checkoutProducts' | OrderPositionKeySpecifier)[];
export type OrderPositionFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	usedCapacity?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	work?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogItemId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	sales?: FieldPolicy<any> | FieldReadFunction<any>,
	partialPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutProducts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderReviewCustomKeySpecifier = ('id' | 'uid' | 'rating' | 'timeCreated' | 'text' | 'reply' | 'meetExpectation' | 'client' | OrderReviewCustomKeySpecifier)[];
export type OrderReviewCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	timeCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	reply?: FieldPolicy<any> | FieldReadFunction<any>,
	meetExpectation?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderReviewsConnectionKeySpecifier = ('edges' | OrderReviewsConnectionKeySpecifier)[];
export type OrderReviewsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderReviewsEdgeKeySpecifier = ('node' | OrderReviewsEdgeKeySpecifier)[];
export type OrderReviewsEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartialPaymentKeySpecifier = ('kind' | 'complex' | 'complexDefaultUid' | 'firstPayment' | PartialPaymentKeySpecifier)[];
export type PartialPaymentFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	complex?: FieldPolicy<any> | FieldReadFunction<any>,
	complexDefaultUid?: FieldPolicy<any> | FieldReadFunction<any>,
	firstPayment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartialPaymentComplexItemKeySpecifier = ('uid' | 'name' | 'description' | 'triggerKind' | PartialPaymentComplexItemKeySpecifier)[];
export type PartialPaymentComplexItemFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerKind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartialPriceKeySpecifier = ('amount' | 'deadline' | 'selectionUnitNames' | 'priority' | PartialPriceKeySpecifier)[];
export type PartialPriceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	deadline?: FieldPolicy<any> | FieldReadFunction<any>,
	selectionUnitNames?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhoneKeySpecifier = ('number' | PhoneKeySpecifier)[];
export type PhoneFieldPolicy = {
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoDataKeySpecifier = ('url' | 'size' | 'width' | 'height' | PhotoDataKeySpecifier)[];
export type PhotoDataFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceOrderConditionDataKeySpecifier = ('kind' | 'from' | 'to' | PriceOrderConditionDataKeySpecifier)[];
export type PriceOrderConditionDataFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrivateApiLandingViewerKeySpecifier = ('id' | 'isEditor' | 'user' | 'landing' | 'masterClientCommon' | PrivateApiLandingViewerKeySpecifier)[];
export type PrivateApiLandingViewerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEditor?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	landing?: FieldPolicy<any> | FieldReadFunction<any>,
	masterClientCommon?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromoCode_FragmentKeySpecifier = ('id' | 'code' | 'value' | 'unit' | 'activeFrom' | 'activeTill' | 'isActive' | PromoCode_FragmentKeySpecifier)[];
export type PromoCode_FragmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	activeFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	activeTill?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicLandingViewerKeySpecifier = ('id' | 'foo' | 'master' | 'landing' | 'checkoutPriceDetails' | 'registerAuthMethod' | 'checkoutPositions' | 'sendingTransport' | 'org' | PublicLandingViewerKeySpecifier)[];
export type PublicLandingViewerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	foo?: FieldPolicy<any> | FieldReadFunction<any>,
	master?: FieldPolicy<any> | FieldReadFunction<any>,
	landing?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutPriceDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	registerAuthMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutPositions?: FieldPolicy<any> | FieldReadFunction<any>,
	sendingTransport?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicMasterRoleKeySpecifier = ('uid' | 'hasPromoCode' | 'master' | 'contacts' | 'sendingTransport' | 'studentUrl' | PublicMasterRoleKeySpecifier)[];
export type PublicMasterRoleFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	master?: FieldPolicy<any> | FieldReadFunction<any>,
	contacts?: FieldPolicy<any> | FieldReadFunction<any>,
	sendingTransport?: FieldPolicy<any> | FieldReadFunction<any>,
	studentUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('me' | 'viewer' | 'templates' | 'template' | 'courses' | 'course' | 'orderCatalogItem' | 'staticFiles' | 'extraFieldsQuestions' | 'promoCode' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	courses?: FieldPolicy<any> | FieldReadFunction<any>,
	course?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCatalogItem?: FieldPolicy<any> | FieldReadFunction<any>,
	staticFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	extraFieldsQuestions?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RestApiPayloadKeySpecifier = ('error' | 'message' | 'token' | 'customerId' | 'methods' | RestApiPayloadKeySpecifier)[];
export type RestApiPayloadFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	customerId?: FieldPolicy<any> | FieldReadFunction<any>,
	methods?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCustomKeySpecifier = ('id' | 'uid' | 'name' | 'isActive' | 'benefitKind' | 'benefitItems' | 'benefitAmount' | 'benefitUnit' | 'orderCondition' | SaleCustomKeySpecifier)[];
export type SaleCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitKind?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitItems?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCondition?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleOrderPositionKeySpecifier = ('positionId' | 'saleId' | 'saleName' | 'benefitAmount' | 'benefitUnit' | 'isBest' | SaleOrderPositionKeySpecifier)[];
export type SaleOrderPositionFieldPolicy = {
	positionId?: FieldPolicy<any> | FieldReadFunction<any>,
	saleId?: FieldPolicy<any> | FieldReadFunction<any>,
	saleName?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	isBest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendingTransportKeySpecifier = ('emailTransport' | 'telegramTransport' | 'whatsAppTransport' | SendingTransportKeySpecifier)[];
export type SendingTransportFieldPolicy = {
	emailTransport?: FieldPolicy<any> | FieldReadFunction<any>,
	telegramTransport?: FieldPolicy<any> | FieldReadFunction<any>,
	whatsAppTransport?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SocialKeySpecifier = ('network' | 'account' | SocialKeySpecifier)[];
export type SocialFieldPolicy = {
	network?: FieldPolicy<any> | FieldReadFunction<any>,
	account?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaticFileKeySpecifier = ('type' | 'name' | 'relativePath' | 'mimeType' | StaticFileKeySpecifier)[];
export type StaticFileFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	relativePath?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TelegramTransportKeySpecifier = ('botUsername' | TelegramTransportKeySpecifier)[];
export type TelegramTransportFieldPolicy = {
	botUsername?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeUnitWithAmountKeySpecifier = ('unit' | 'amount' | TimeUnitWithAmountKeySpecifier)[];
export type TimeUnitWithAmountFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsedPartialPaymentKeySpecifier = ('kind' | 'complex' | UsedPartialPaymentKeySpecifier)[];
export type UsedPartialPaymentFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	complex?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsedPartialPaymentComplexKeySpecifier = ('item' | 'firstPaymentIndexes' | UsedPartialPaymentComplexKeySpecifier)[];
export type UsedPartialPaymentComplexFieldPolicy = {
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	firstPaymentIndexes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthKeySpecifier = ('method' | 'key' | UserAuthKeySpecifier)[];
export type UserAuthFieldPolicy = {
	method?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserHumanKeySpecifier = ('id' | 'rawFirstName' | 'firstName' | 'middleName' | 'lastName' | UserHumanKeySpecifier)[];
export type UserHumanFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rawFirstName?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	middleName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserProfileCustomKeySpecifier = ('id' | 'uid' | 'auths' | 'name' | 'shortName' | 'avatarUrl' | 'client' | UserProfileCustomKeySpecifier)[];
export type UserProfileCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	auths?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shortName?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewerOrgProfileKeySpecifier = ('language' | ViewerOrgProfileKeySpecifier)[];
export type ViewerOrgProfileFieldPolicy = {
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WhatsAppTransportKeySpecifier = ('name' | WhatsAppTransportKeySpecifier)[];
export type WhatsAppTransportFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	CashPaymentAlias?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CashPaymentAliasKeySpecifier | (() => undefined | CashPaymentAliasKeySpecifier),
		fields?: CashPaymentAliasFieldPolicy,
	},
	CatalogFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatalogFieldValueKeySpecifier | (() => undefined | CatalogFieldValueKeySpecifier),
		fields?: CatalogFieldValueFieldPolicy,
	},
	CatalogItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatalogItemKeySpecifier | (() => undefined | CatalogItemKeySpecifier),
		fields?: CatalogItemFieldPolicy,
	},
	CheckoutPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutPositionKeySpecifier | (() => undefined | CheckoutPositionKeySpecifier),
		fields?: CheckoutPositionFieldPolicy,
	},
	CheckoutPriceDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutPriceDetailsKeySpecifier | (() => undefined | CheckoutPriceDetailsKeySpecifier),
		fields?: CheckoutPriceDetailsFieldPolicy,
	},
	CheckoutProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutProductKeySpecifier | (() => undefined | CheckoutProductKeySpecifier),
		fields?: CheckoutProductFieldPolicy,
	},
	ClientForm?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientFormKeySpecifier | (() => undefined | ClientFormKeySpecifier),
		fields?: ClientFormFieldPolicy,
	},
	ClientFormAnswer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientFormAnswerKeySpecifier | (() => undefined | ClientFormAnswerKeySpecifier),
		fields?: ClientFormAnswerFieldPolicy,
	},
	ClientFormQuestion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientFormQuestionKeySpecifier | (() => undefined | ClientFormQuestionKeySpecifier),
		fields?: ClientFormQuestionFieldPolicy,
	},
	ClientFormQuestionVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientFormQuestionVariantKeySpecifier | (() => undefined | ClientFormQuestionVariantKeySpecifier),
		fields?: ClientFormQuestionVariantFieldPolicy,
	},
	ClientFormSubmitExtraFieldsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientFormSubmitExtraFieldsPayloadKeySpecifier | (() => undefined | ClientFormSubmitExtraFieldsPayloadKeySpecifier),
		fields?: ClientFormSubmitExtraFieldsPayloadFieldPolicy,
	},
	ClientProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientProfileKeySpecifier | (() => undefined | ClientProfileKeySpecifier),
		fields?: ClientProfileFieldPolicy,
	},
	ContactsProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactsProfileKeySpecifier | (() => undefined | ContactsProfileKeySpecifier),
		fields?: ContactsProfileFieldPolicy,
	},
	CourseItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseItemKeySpecifier | (() => undefined | CourseItemKeySpecifier),
		fields?: CourseItemFieldPolicy,
	},
	CourseItemMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseItemMetaKeySpecifier | (() => undefined | CourseItemMetaKeySpecifier),
		fields?: CourseItemMetaFieldPolicy,
	},
	CoursePublicCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoursePublicCustomKeySpecifier | (() => undefined | CoursePublicCustomKeySpecifier),
		fields?: CoursePublicCustomFieldPolicy,
	},
	CourseTariffFlowPublic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffFlowPublicKeySpecifier | (() => undefined | CourseTariffFlowPublicKeySpecifier),
		fields?: CourseTariffFlowPublicFieldPolicy,
	},
	CourseTariffPriceDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffPriceDetailsKeySpecifier | (() => undefined | CourseTariffPriceDetailsKeySpecifier),
		fields?: CourseTariffPriceDetailsFieldPolicy,
	},
	CourseTariffPriceDetailsChangeByTime?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffPriceDetailsChangeByTimeKeySpecifier | (() => undefined | CourseTariffPriceDetailsChangeByTimeKeySpecifier),
		fields?: CourseTariffPriceDetailsChangeByTimeFieldPolicy,
	},
	CourseTariffPriceDetailsChangeByTimeItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffPriceDetailsChangeByTimeItemKeySpecifier | (() => undefined | CourseTariffPriceDetailsChangeByTimeItemKeySpecifier),
		fields?: CourseTariffPriceDetailsChangeByTimeItemFieldPolicy,
	},
	CourseTariffProlongation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffProlongationKeySpecifier | (() => undefined | CourseTariffProlongationKeySpecifier),
		fields?: CourseTariffProlongationFieldPolicy,
	},
	CourseTariffProlongationItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffProlongationItemKeySpecifier | (() => undefined | CourseTariffProlongationItemKeySpecifier),
		fields?: CourseTariffProlongationItemFieldPolicy,
	},
	CourseTariffPublicCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffPublicCustomKeySpecifier | (() => undefined | CourseTariffPublicCustomKeySpecifier),
		fields?: CourseTariffPublicCustomFieldPolicy,
	},
	Email?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailKeySpecifier | (() => undefined | EmailKeySpecifier),
		fields?: EmailFieldPolicy,
	},
	EmailTransport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailTransportKeySpecifier | (() => undefined | EmailTransportKeySpecifier),
		fields?: EmailTransportFieldPolicy,
	},
	FileData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileDataKeySpecifier | (() => undefined | FileDataKeySpecifier),
		fields?: FileDataFieldPolicy,
	},
	FileMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileMetaKeySpecifier | (() => undefined | FileMetaKeySpecifier),
		fields?: FileMetaFieldPolicy,
	},
	FinanceDocument?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinanceDocumentKeySpecifier | (() => undefined | FinanceDocumentKeySpecifier),
		fields?: FinanceDocumentFieldPolicy,
	},
	FlowPublicCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowPublicCustomKeySpecifier | (() => undefined | FlowPublicCustomKeySpecifier),
		fields?: FlowPublicCustomFieldPolicy,
	},
	ItemOrderConditionData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemOrderConditionDataKeySpecifier | (() => undefined | ItemOrderConditionDataKeySpecifier),
		fields?: ItemOrderConditionDataFieldPolicy,
	},
	LandingCardField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandingCardFieldKeySpecifier | (() => undefined | LandingCardFieldKeySpecifier),
		fields?: LandingCardFieldFieldPolicy,
	},
	LandingOrderPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandingOrderPayloadKeySpecifier | (() => undefined | LandingOrderPayloadKeySpecifier),
		fields?: LandingOrderPayloadFieldPolicy,
	},
	LandingSite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandingSiteKeySpecifier | (() => undefined | LandingSiteKeySpecifier),
		fields?: LandingSiteFieldPolicy,
	},
	LandingSitePrivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandingSitePrivateKeySpecifier | (() => undefined | LandingSitePrivateKeySpecifier),
		fields?: LandingSitePrivateFieldPolicy,
	},
	LandingTemplate__Fragment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandingTemplate__FragmentKeySpecifier | (() => undefined | LandingTemplate__FragmentKeySpecifier),
		fields?: LandingTemplate__FragmentFieldPolicy,
	},
	LandingViewerUserRole_Fragment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandingViewerUserRole_FragmentKeySpecifier | (() => undefined | LandingViewerUserRole_FragmentKeySpecifier),
		fields?: LandingViewerUserRole_FragmentFieldPolicy,
	},
	LandintTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandintTemplatePayloadKeySpecifier | (() => undefined | LandintTemplatePayloadKeySpecifier),
		fields?: LandintTemplatePayloadFieldPolicy,
	},
	LangRussianNoun?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LangRussianNounKeySpecifier | (() => undefined | LangRussianNounKeySpecifier),
		fields?: LangRussianNounFieldPolicy,
	},
	MasterClientProfileCommon?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MasterClientProfileCommonKeySpecifier | (() => undefined | MasterClientProfileCommonKeySpecifier),
		fields?: MasterClientProfileCommonFieldPolicy,
	},
	MasterClientRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MasterClientRoleKeySpecifier | (() => undefined | MasterClientRoleKeySpecifier),
		fields?: MasterClientRoleFieldPolicy,
	},
	MasterProfileCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MasterProfileCustomKeySpecifier | (() => undefined | MasterProfileCustomKeySpecifier),
		fields?: MasterProfileCustomFieldPolicy,
	},
	Messenger?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessengerKeySpecifier | (() => undefined | MessengerKeySpecifier),
		fields?: MessengerFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	OrderCatalogItemMaster?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCatalogItemMasterKeySpecifier | (() => undefined | OrderCatalogItemMasterKeySpecifier),
		fields?: OrderCatalogItemMasterFieldPolicy,
	},
	OrderCatalogItemOrg?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCatalogItemOrgKeySpecifier | (() => undefined | OrderCatalogItemOrgKeySpecifier),
		fields?: OrderCatalogItemOrgFieldPolicy,
	},
	OrderCatalogItemOrgContacts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCatalogItemOrgContactsKeySpecifier | (() => undefined | OrderCatalogItemOrgContactsKeySpecifier),
		fields?: OrderCatalogItemOrgContactsFieldPolicy,
	},
	OrderCatalogItemOrgEmailTransport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCatalogItemOrgEmailTransportKeySpecifier | (() => undefined | OrderCatalogItemOrgEmailTransportKeySpecifier),
		fields?: OrderCatalogItemOrgEmailTransportFieldPolicy,
	},
	OrderCatalogItemOrgSendingTransport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCatalogItemOrgSendingTransportKeySpecifier | (() => undefined | OrderCatalogItemOrgSendingTransportKeySpecifier),
		fields?: OrderCatalogItemOrgSendingTransportFieldPolicy,
	},
	OrderCatalogItem_Fragment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCatalogItem_FragmentKeySpecifier | (() => undefined | OrderCatalogItem_FragmentKeySpecifier),
		fields?: OrderCatalogItem_FragmentFieldPolicy,
	},
	OrderCondition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderConditionKeySpecifier | (() => undefined | OrderConditionKeySpecifier),
		fields?: OrderConditionFieldPolicy,
	},
	OrderCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCustomKeySpecifier | (() => undefined | OrderCustomKeySpecifier),
		fields?: OrderCustomFieldPolicy,
	},
	OrderPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderPositionKeySpecifier | (() => undefined | OrderPositionKeySpecifier),
		fields?: OrderPositionFieldPolicy,
	},
	OrderReviewCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderReviewCustomKeySpecifier | (() => undefined | OrderReviewCustomKeySpecifier),
		fields?: OrderReviewCustomFieldPolicy,
	},
	OrderReviewsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderReviewsConnectionKeySpecifier | (() => undefined | OrderReviewsConnectionKeySpecifier),
		fields?: OrderReviewsConnectionFieldPolicy,
	},
	OrderReviewsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderReviewsEdgeKeySpecifier | (() => undefined | OrderReviewsEdgeKeySpecifier),
		fields?: OrderReviewsEdgeFieldPolicy,
	},
	PartialPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartialPaymentKeySpecifier | (() => undefined | PartialPaymentKeySpecifier),
		fields?: PartialPaymentFieldPolicy,
	},
	PartialPaymentComplexItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartialPaymentComplexItemKeySpecifier | (() => undefined | PartialPaymentComplexItemKeySpecifier),
		fields?: PartialPaymentComplexItemFieldPolicy,
	},
	PartialPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartialPriceKeySpecifier | (() => undefined | PartialPriceKeySpecifier),
		fields?: PartialPriceFieldPolicy,
	},
	Phone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhoneKeySpecifier | (() => undefined | PhoneKeySpecifier),
		fields?: PhoneFieldPolicy,
	},
	PhotoData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoDataKeySpecifier | (() => undefined | PhotoDataKeySpecifier),
		fields?: PhotoDataFieldPolicy,
	},
	PriceOrderConditionData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceOrderConditionDataKeySpecifier | (() => undefined | PriceOrderConditionDataKeySpecifier),
		fields?: PriceOrderConditionDataFieldPolicy,
	},
	PrivateApiLandingViewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrivateApiLandingViewerKeySpecifier | (() => undefined | PrivateApiLandingViewerKeySpecifier),
		fields?: PrivateApiLandingViewerFieldPolicy,
	},
	PromoCode_Fragment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromoCode_FragmentKeySpecifier | (() => undefined | PromoCode_FragmentKeySpecifier),
		fields?: PromoCode_FragmentFieldPolicy,
	},
	PublicLandingViewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicLandingViewerKeySpecifier | (() => undefined | PublicLandingViewerKeySpecifier),
		fields?: PublicLandingViewerFieldPolicy,
	},
	PublicMasterRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicMasterRoleKeySpecifier | (() => undefined | PublicMasterRoleKeySpecifier),
		fields?: PublicMasterRoleFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RestApiPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RestApiPayloadKeySpecifier | (() => undefined | RestApiPayloadKeySpecifier),
		fields?: RestApiPayloadFieldPolicy,
	},
	SaleCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCustomKeySpecifier | (() => undefined | SaleCustomKeySpecifier),
		fields?: SaleCustomFieldPolicy,
	},
	SaleOrderPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleOrderPositionKeySpecifier | (() => undefined | SaleOrderPositionKeySpecifier),
		fields?: SaleOrderPositionFieldPolicy,
	},
	SendingTransport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendingTransportKeySpecifier | (() => undefined | SendingTransportKeySpecifier),
		fields?: SendingTransportFieldPolicy,
	},
	Social?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SocialKeySpecifier | (() => undefined | SocialKeySpecifier),
		fields?: SocialFieldPolicy,
	},
	StaticFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaticFileKeySpecifier | (() => undefined | StaticFileKeySpecifier),
		fields?: StaticFileFieldPolicy,
	},
	TelegramTransport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TelegramTransportKeySpecifier | (() => undefined | TelegramTransportKeySpecifier),
		fields?: TelegramTransportFieldPolicy,
	},
	TimeUnitWithAmount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeUnitWithAmountKeySpecifier | (() => undefined | TimeUnitWithAmountKeySpecifier),
		fields?: TimeUnitWithAmountFieldPolicy,
	},
	UsedPartialPayment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsedPartialPaymentKeySpecifier | (() => undefined | UsedPartialPaymentKeySpecifier),
		fields?: UsedPartialPaymentFieldPolicy,
	},
	UsedPartialPaymentComplex?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsedPartialPaymentComplexKeySpecifier | (() => undefined | UsedPartialPaymentComplexKeySpecifier),
		fields?: UsedPartialPaymentComplexFieldPolicy,
	},
	UserAuth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthKeySpecifier | (() => undefined | UserAuthKeySpecifier),
		fields?: UserAuthFieldPolicy,
	},
	UserHuman?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserHumanKeySpecifier | (() => undefined | UserHumanKeySpecifier),
		fields?: UserHumanFieldPolicy,
	},
	UserProfileCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserProfileCustomKeySpecifier | (() => undefined | UserProfileCustomKeySpecifier),
		fields?: UserProfileCustomFieldPolicy,
	},
	ViewerOrgProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewerOrgProfileKeySpecifier | (() => undefined | ViewerOrgProfileKeySpecifier),
		fields?: ViewerOrgProfileFieldPolicy,
	},
	WhatsAppTransport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WhatsAppTransportKeySpecifier | (() => undefined | WhatsAppTransportKeySpecifier),
		fields?: WhatsAppTransportFieldPolicy,
	}
};