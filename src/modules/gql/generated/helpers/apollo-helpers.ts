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
export type CatalogFieldValueKeySpecifier = ('uid' | 'fieldId' | 'fieldName' | 'optionName' | 'optionValue' | 'isSelected' | 'isDefault' | 'groupName' | 'extraPay' | 'extraPayOriginal' | 'extraPayPercentage' | 'extraWork' | 'extraWorkPercentage' | 'availableCount' | 'type' | CatalogFieldValueKeySpecifier)[];
export type CatalogFieldValueFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldId?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	optionName?: FieldPolicy<any> | FieldReadFunction<any>,
	optionValue?: FieldPolicy<any> | FieldReadFunction<any>,
	isSelected?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	groupName?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPay?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPayOriginal?: FieldPolicy<any> | FieldReadFunction<any>,
	extraPayPercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	extraWork?: FieldPolicy<any> | FieldReadFunction<any>,
	extraWorkPercentage?: FieldPolicy<any> | FieldReadFunction<any>,
	availableCount?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CourseItemKeySpecifier = ('courseId' | 'flowId' | 'tariffId' | 'prolongationDays' | CourseItemKeySpecifier)[];
export type CourseItemFieldPolicy = {
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	flowId?: FieldPolicy<any> | FieldReadFunction<any>,
	tariffId?: FieldPolicy<any> | FieldReadFunction<any>,
	prolongationDays?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoursePublicCustomKeySpecifier = ('id' | 'name' | 'uid' | 'catalogItems' | 'tariffs' | 'tariffPerFlowDataItems' | 'kind' | 'subKind' | CoursePublicCustomKeySpecifier)[];
export type CoursePublicCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogItems?: FieldPolicy<any> | FieldReadFunction<any>,
	tariffs?: FieldPolicy<any> | FieldReadFunction<any>,
	tariffPerFlowDataItems?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	subKind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffFlowPublicKeySpecifier = ('courseId' | 'courseTariffId' | 'flowId' | 'computed' | 'priceDetails' | 'prolongation' | CourseTariffFlowPublicKeySpecifier)[];
export type CourseTariffFlowPublicFieldPolicy = {
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	courseTariffId?: FieldPolicy<any> | FieldReadFunction<any>,
	flowId?: FieldPolicy<any> | FieldReadFunction<any>,
	computed?: FieldPolicy<any> | FieldReadFunction<any>,
	priceDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	prolongation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CourseTariffFlowPublicViewComputedKeySpecifier = ('capacityRemainder' | CourseTariffFlowPublicViewComputedKeySpecifier)[];
export type CourseTariffFlowPublicViewComputedFieldPolicy = {
	capacityRemainder?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CourseTariffPublicCustomKeySpecifier = ('id' | 'uid' | 'name' | 'courseId' | 'position' | 'isActive' | 'flowBehaviour' | 'marketingBenefits' | CourseTariffPublicCustomKeySpecifier)[];
export type CourseTariffPublicCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	courseId?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	flowBehaviour?: FieldPolicy<any> | FieldReadFunction<any>,
	marketingBenefits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailKeySpecifier = ('email' | EmailKeySpecifier)[];
export type EmailFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>
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
export type LandingOrderPayloadKeySpecifier = ('order' | LandingOrderPayloadKeySpecifier)[];
export type LandingOrderPayloadFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingSiteKeySpecifier = ('id' | 'cardFields' | 'background' | LandingSiteKeySpecifier)[];
export type LandingSiteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	cardFields?: FieldPolicy<any> | FieldReadFunction<any>,
	background?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingSitePrivateKeySpecifier = ('id' | 'uid' | LandingSitePrivateKeySpecifier)[];
export type LandingSitePrivateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingTemplate__FragmentKeySpecifier = ('foo' | 'id' | 'name' | 'component' | 'description' | 'components' | 'props' | 'uri' | LandingTemplate__FragmentKeySpecifier)[];
export type LandingTemplate__FragmentFieldPolicy = {
	foo?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	props?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingViewerUserRole_FragmentKeySpecifier = ('id' | 'uid' | 'roles' | 'human' | 'contacts' | LandingViewerUserRole_FragmentKeySpecifier)[];
export type LandingViewerUserRole_FragmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	human?: FieldPolicy<any> | FieldReadFunction<any>,
	contacts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandingViewerUserRoles_FragmentKeySpecifier = ('admin' | 'client' | 'master' | 'partner' | LandingViewerUserRoles_FragmentKeySpecifier)[];
export type LandingViewerUserRoles_FragmentFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	master?: FieldPolicy<any> | FieldReadFunction<any>,
	partner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LandintTemplatePayloadKeySpecifier = ('landingTemplate' | LandintTemplatePayloadKeySpecifier)[];
export type LandintTemplatePayloadFieldPolicy = {
	landingTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MasterProfileCustomKeySpecifier = ('id' | 'uid' | 'label' | 'pdfContractOffer' | 'pdfPrivacyPolicy' | 'currency' | 'cashPaymentAliases' | 'orgPhoto' | MasterProfileCustomKeySpecifier)[];
export type MasterProfileCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	pdfContractOffer?: FieldPolicy<any> | FieldReadFunction<any>,
	pdfPrivacyPolicy?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	cashPaymentAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	orgPhoto?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessengerKeySpecifier = ('service' | 'account' | MessengerKeySpecifier)[];
export type MessengerFieldPolicy = {
	service?: FieldPolicy<any> | FieldReadFunction<any>,
	account?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createLandingOrder' | 'updateLandingOrder' | 'submitLandingOrder' | 'sendSmsCode' | 'login' | 'authClientByPhone' | 'deleteLandingTemplateCustom' | 'createLandingTemplate' | 'updateLandingTemplate' | 's3getSignedUrl' | 's3Upload' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createLandingOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLandingOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	submitLandingOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	sendSmsCode?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	authClientByPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLandingTemplateCustom?: FieldPolicy<any> | FieldReadFunction<any>,
	createLandingTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLandingTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	s3getSignedUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	s3Upload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItemMasterKeySpecifier = ('id' | 'uid' | OrderCatalogItemMasterKeySpecifier)[];
export type OrderCatalogItemMasterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCatalogItem_FragmentKeySpecifier = ('id' | 'uid' | 'name' | 'title' | 'unitPrice' | 'unitPriceOriginal' | 'master' | 'course' | 'sales' | 'promoCode' | 'priceWithPromoCode' | 'reviewsCount' | 'reviews' | 'fieldValues' | OrderCatalogItem_FragmentKeySpecifier)[];
export type OrderCatalogItem_FragmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPriceOriginal?: FieldPolicy<any> | FieldReadFunction<any>,
	master?: FieldPolicy<any> | FieldReadFunction<any>,
	course?: FieldPolicy<any> | FieldReadFunction<any>,
	sales?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	priceWithPromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderConditionKeySpecifier = ('kind' | 'data' | OrderConditionKeySpecifier)[];
export type OrderConditionFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCustomKeySpecifier = ('id' | 'uid' | 'price' | 'salePrice' | 'catalogPrice' | 'status' | 'paymentUrl' | 'partialPrices' | 'isMultiday' | 'partialPayment' | 'positions' | 'promoCode' | OrderCustomKeySpecifier)[];
export type OrderCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	salePrice?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	partialPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	isMultiday?: FieldPolicy<any> | FieldReadFunction<any>,
	partialPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderPositionKeySpecifier = ('uid' | 'name' | 'quantity' | 'usedCapacity' | 'price' | 'work' | 'catalogItemId' | 'parentId' | 'sales' | OrderPositionKeySpecifier)[];
export type OrderPositionFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	usedCapacity?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	work?: FieldPolicy<any> | FieldReadFunction<any>,
	catalogItemId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	sales?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderReviewCustomKeySpecifier = ('id' | 'uid' | 'rating' | 'timeCreated' | 'text' | 'meetExpectation' | 'client' | OrderReviewCustomKeySpecifier)[];
export type OrderReviewCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	timeCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type PartialPriceKeySpecifier = ('amount' | 'deadline' | PartialPriceKeySpecifier)[];
export type PartialPriceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	deadline?: FieldPolicy<any> | FieldReadFunction<any>
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
export type PrivateApiLandingViewerKeySpecifier = ('id' | 'isEditor' | 'user' | 'landing' | PrivateApiLandingViewerKeySpecifier)[];
export type PrivateApiLandingViewerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEditor?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	landing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromoCode_FragmentKeySpecifier = ('id' | 'code' | 'discountPercent' | 'activeFrom' | 'activeTill' | 'isActive' | PromoCode_FragmentKeySpecifier)[];
export type PromoCode_FragmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	discountPercent?: FieldPolicy<any> | FieldReadFunction<any>,
	activeFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	activeTill?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicLandingViewerKeySpecifier = ('id' | 'foo' | 'master' | 'landing' | PublicLandingViewerKeySpecifier)[];
export type PublicLandingViewerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	foo?: FieldPolicy<any> | FieldReadFunction<any>,
	master?: FieldPolicy<any> | FieldReadFunction<any>,
	landing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicMasterRoleKeySpecifier = ('uid' | 'master' | PublicMasterRoleKeySpecifier)[];
export type PublicMasterRoleFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	master?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('me' | 'viewer' | 'templates' | 'template' | 'courses' | 'orderCatalogItem' | 'staticFiles' | 'promoCode' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	courses?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCatalogItem?: FieldPolicy<any> | FieldReadFunction<any>,
	staticFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	promoCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RestApiPayloadKeySpecifier = ('error' | 'message' | 'token' | RestApiPayloadKeySpecifier)[];
export type RestApiPayloadFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
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
export type SaleOrderPositionKeySpecifier = ('positionId' | 'saleId' | 'saleName' | 'benefitAmount' | 'benefitUnit' | SaleOrderPositionKeySpecifier)[];
export type SaleOrderPositionFieldPolicy = {
	positionId?: FieldPolicy<any> | FieldReadFunction<any>,
	saleId?: FieldPolicy<any> | FieldReadFunction<any>,
	saleName?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	benefitUnit?: FieldPolicy<any> | FieldReadFunction<any>
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
export type TimeUnitWithAmountKeySpecifier = ('unit' | 'amount' | TimeUnitWithAmountKeySpecifier)[];
export type TimeUnitWithAmountFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserHumanKeySpecifier = ('id' | 'rawFirstName' | 'firstName' | 'middleName' | 'lastName' | UserHumanKeySpecifier)[];
export type UserHumanFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rawFirstName?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	middleName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserProfileCustomKeySpecifier = ('id' | 'uid' | 'login' | 'name' | 'shortName' | 'avatarUrl' | UserProfileCustomKeySpecifier)[];
export type UserProfileCustomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shortName?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>
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
	ContactsProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactsProfileKeySpecifier | (() => undefined | ContactsProfileKeySpecifier),
		fields?: ContactsProfileFieldPolicy,
	},
	CourseItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseItemKeySpecifier | (() => undefined | CourseItemKeySpecifier),
		fields?: CourseItemFieldPolicy,
	},
	CoursePublicCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoursePublicCustomKeySpecifier | (() => undefined | CoursePublicCustomKeySpecifier),
		fields?: CoursePublicCustomFieldPolicy,
	},
	CourseTariffFlowPublic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffFlowPublicKeySpecifier | (() => undefined | CourseTariffFlowPublicKeySpecifier),
		fields?: CourseTariffFlowPublicFieldPolicy,
	},
	CourseTariffFlowPublicViewComputed?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CourseTariffFlowPublicViewComputedKeySpecifier | (() => undefined | CourseTariffFlowPublicViewComputedKeySpecifier),
		fields?: CourseTariffFlowPublicViewComputedFieldPolicy,
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
	LandingViewerUserRoles_Fragment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandingViewerUserRoles_FragmentKeySpecifier | (() => undefined | LandingViewerUserRoles_FragmentKeySpecifier),
		fields?: LandingViewerUserRoles_FragmentFieldPolicy,
	},
	LandintTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LandintTemplatePayloadKeySpecifier | (() => undefined | LandintTemplatePayloadKeySpecifier),
		fields?: LandintTemplatePayloadFieldPolicy,
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
	Social?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SocialKeySpecifier | (() => undefined | SocialKeySpecifier),
		fields?: SocialFieldPolicy,
	},
	StaticFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaticFileKeySpecifier | (() => undefined | StaticFileKeySpecifier),
		fields?: StaticFileFieldPolicy,
	},
	TimeUnitWithAmount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeUnitWithAmountKeySpecifier | (() => undefined | TimeUnitWithAmountKeySpecifier),
		fields?: TimeUnitWithAmountFieldPolicy,
	},
	UserHuman?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserHumanKeySpecifier | (() => undefined | UserHumanKeySpecifier),
		fields?: UserHumanFieldPolicy,
	},
	UserProfileCustom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserProfileCustomKeySpecifier | (() => undefined | UserProfileCustomKeySpecifier),
		fields?: UserProfileCustomFieldPolicy,
	}
};