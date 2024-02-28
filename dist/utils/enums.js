"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.Resolution = exports.appearance = exports.CorrectAnswer = exports.BannerType = exports.ProductType = exports.Subjects = exports.ClassStates = exports.institutionTypes = exports.OnboardingStages = exports.MaterialTypes = exports.PackageTypes = exports.Genders = exports.OSTypes = exports.BrowserTypes = exports.OrderTypes = exports.DeviceTypes = exports.SubscriptionStates = exports.UserTypes = void 0;
var UserTypes;
(function (UserTypes) {
    UserTypes["STUDENT"] = "STUDENT";
    UserTypes["PARENT"] = "PARENT";
    UserTypes["ADMIN"] = "ADMIN";
    UserTypes["TEACHER"] = "TEACHER";
    UserTypes["CUSTOMERCARE"] = "CUSTOMERCARE";
    UserTypes["DEFAULT"] = "DEFAULT";
})(UserTypes || (exports.UserTypes = UserTypes = {}));
var SubscriptionStates;
(function (SubscriptionStates) {
    SubscriptionStates["ACTIVE"] = "ACTIVE";
    SubscriptionStates["DEACTIVATED"] = "DEACTIVATED";
    SubscriptionStates["INACTIVE"] = "INACTIVE";
})(SubscriptionStates || (exports.SubscriptionStates = SubscriptionStates = {}));
var DeviceTypes;
(function (DeviceTypes) {
    DeviceTypes["ANDROID"] = "ANDROID";
    DeviceTypes["IOS"] = "IOS";
    DeviceTypes["WEB"] = "WEB";
    DeviceTypes["OMOTAB"] = "OMOTAB";
    DeviceTypes["UNKNOWN"] = "UNKNOWN";
})(DeviceTypes || (exports.DeviceTypes = DeviceTypes = {}));
var OrderTypes;
(function (OrderTypes) {
    OrderTypes["PICKUP"] = "PICKUP";
    OrderTypes["DELIVERY"] = "DELIVERY";
})(OrderTypes || (exports.OrderTypes = OrderTypes = {}));
var BrowserTypes;
(function (BrowserTypes) {
    BrowserTypes["CHROME"] = "CHROME";
    BrowserTypes["EDGE"] = "EDGE";
    BrowserTypes["SAFARI"] = "SAFARI";
    BrowserTypes["UNKNOWN"] = "UNKNOWN";
})(BrowserTypes || (exports.BrowserTypes = BrowserTypes = {}));
var OSTypes;
(function (OSTypes) {
    OSTypes["WINDOWS"] = "WINDOWS";
    OSTypes["LINUX"] = "LINUX";
    OSTypes["MACINTOSH"] = "MACINTOSH";
    OSTypes["ANDROID"] = "ANDROID";
    OSTypes["IOS"] = "IOS";
    OSTypes["OMOTAB"] = "OMOTAB";
    OSTypes["UNKNOWN"] = "UNKNOWN";
})(OSTypes || (exports.OSTypes = OSTypes = {}));
var Genders;
(function (Genders) {
    Genders["MALE"] = "MALE";
    Genders["FEMALE"] = "FEMALE";
})(Genders || (exports.Genders = Genders = {}));
var PackageTypes;
(function (PackageTypes) {
    PackageTypes["PRE_SCHOOL"] = "PRE_SCHOOL";
    PackageTypes["PRIMARY_SCHOOL"] = "PRIMARY_SCHOOL";
    PackageTypes["SECONDARY_SCHOOL"] = "SECONDARY_SCHOOL";
    PackageTypes["LEADER_IN_ME"] = "LEADER_IN_ME";
    PackageTypes["LANGUAGES"] = "LANGUAGES";
})(PackageTypes || (exports.PackageTypes = PackageTypes = {}));
var MaterialTypes;
(function (MaterialTypes) {
    MaterialTypes["VIDEO"] = "VIDEO";
})(MaterialTypes || (exports.MaterialTypes = MaterialTypes = {}));
var OnboardingStages;
(function (OnboardingStages) {
    OnboardingStages["STAGE_0"] = "STAGE_0";
    OnboardingStages["STAGE_1"] = "STAGE_1";
    OnboardingStages["STAGE_2"] = "STAGE_2";
    OnboardingStages["STAGE_3"] = "STAGE_3";
})(OnboardingStages || (exports.OnboardingStages = OnboardingStages = {}));
var institutionTypes;
(function (institutionTypes) {
    institutionTypes["NURSERY"] = "NURSERY";
    institutionTypes["PRIMARY"] = "PRIMARY";
})(institutionTypes || (exports.institutionTypes = institutionTypes = {}));
var ClassStates;
(function (ClassStates) {
    ClassStates["STARTED"] = "STARTED";
    ClassStates["ENDED"] = "ENDED";
    ClassStates["ONGOING"] = "ONGOING";
})(ClassStates || (exports.ClassStates = ClassStates = {}));
var Subjects;
(function (Subjects) {
    Subjects["ENGLISH"] = "ENGLISH";
    Subjects["SCIENCE"] = "SCIENCE";
    Subjects["MATHEMATICS"] = "MATHEMATICS";
})(Subjects || (exports.Subjects = Subjects = {}));
var ProductType;
(function (ProductType) {
    ProductType["EBOOK"] = "EBOOK";
    ProductType["IMOSETAB"] = "IMOSETAB";
    ProductType["SUBSCRIPTION"] = "SUBSCRIPTION";
})(ProductType || (exports.ProductType = ProductType = {}));
var BannerType;
(function (BannerType) {
    BannerType["INTERNAL"] = "INTERNAL";
    BannerType["EXTERNAL"] = "EXTERNAL";
})(BannerType || (exports.BannerType = BannerType = {}));
var CorrectAnswer;
(function (CorrectAnswer) {
    CorrectAnswer["option_a"] = "option_a";
    CorrectAnswer["option_b"] = "option_b";
    CorrectAnswer["option_c"] = "option_c";
    CorrectAnswer["option_d"] = "option_d";
})(CorrectAnswer || (exports.CorrectAnswer = CorrectAnswer = {}));
var appearance;
(function (appearance) {
    appearance["light_theme"] = "Light_theme";
    appearance["dark_theme"] = "Dark_theme";
    appearance["auto"] = "Auto";
})(appearance || (exports.appearance = appearance = {}));
var Resolution;
(function (Resolution) {
    Resolution["reso_480"] = "480_P";
    Resolution["reso_1080"] = "1080_P";
    Resolution["reso_4K"] = "4_K";
})(Resolution || (exports.Resolution = Resolution = {}));
var Type;
(function (Type) {
    Type["EBook"] = "EBook";
    Type["Subscription"] = "Subscription";
    Type["Tablet"] = "Tablet";
})(Type || (exports.Type = Type = {}));
//# sourceMappingURL=enums.js.map