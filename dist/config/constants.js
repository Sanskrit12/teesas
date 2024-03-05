"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleConfigs = void 0;
const Addstores_1 = require("../models/entities/Addstores");
const AdminSupport_1 = require("../models/entities/AdminSupport");
const Adminchats_1 = require("../models/entities/Adminchats");
const Cities_1 = require("../models/entities/Cities");
const Countries_1 = require("../models/entities/Countries");
const CountryList_1 = require("../models/entities/CountryList");
const ExamPreparation_1 = require("../models/entities/ExamPreparation");
const FailedJobs_1 = require("../models/entities/FailedJobs");
const GeoZones_1 = require("../models/entities/GeoZones");
const Migrations_1 = require("../models/entities/Migrations");
const OrderAddresses_1 = require("../models/entities/OrderAddresses");
const OrderDetails_1 = require("../models/entities/OrderDetails");
const Orders_1 = require("../models/entities/Orders");
const PasswordResets_1 = require("../models/entities/PasswordResets");
const QuestionOptions_1 = require("../models/entities/QuestionOptions");
const Roles_1 = require("../models/entities/Roles");
const SevenHabitRegistration_1 = require("../models/entities/SevenHabitRegistration");
const States_1 = require("../models/entities/States");
const Stores_1 = require("../models/entities/Stores");
const TableParents_1 = require("../models/entities/TableParents");
const TableUserClassHistories_1 = require("../models/entities/TableUserClassHistories");
const TableUsers_1 = require("../models/entities/TableUsers");
const TblAboutUs_1 = require("../models/entities/TblAboutUs");
const TblAddUserSubscription_1 = require("../models/entities/TblAddUserSubscription");
const TblAdmin_1 = require("../models/entities/TblAdmin");
const TblAppContent_1 = require("../models/entities/TblAppContent");
const TblApplyVoucher_1 = require("../models/entities/TblApplyVoucher");
const TblBadges_1 = require("../models/entities/TblBadges");
const TblBankDetails_1 = require("../models/entities/TblBankDetails");
const TblBanner_1 = require("../models/entities/TblBanner");
const TblBookmarks_1 = require("../models/entities/TblBookmarks");
const TblCardDetails_1 = require("../models/entities/TblCardDetails");
const TblCart_1 = require("../models/entities/TblCart");
const TblChapter_1 = require("../models/entities/TblChapter");
const TblClassStandard_1 = require("../models/entities/TblClassStandard");
const TblColorPlats_1 = require("../models/entities/TblColorPlats");
const TblContact_1 = require("../models/entities/TblContact");
const TblContent_1 = require("../models/entities/TblContent");
const TblCountry_1 = require("../models/entities/TblCountry");
const TblCourses_1 = require("../models/entities/TblCourses");
const TblDonation_1 = require("../models/entities/TblDonation");
const TblDownloadSample_1 = require("../models/entities/TblDownloadSample");
const TblEbbokComment_1 = require("../models/entities/TblEbbokComment");
const TblEbook_1 = require("../models/entities/TblEbook");
const TblEbookOrder_1 = require("../models/entities/TblEbookOrder");
const TblEbookRating_1 = require("../models/entities/TblEbookRating");
const TblEmailStore_1 = require("../models/entities/TblEmailStore");
const TblIcon_1 = require("../models/entities/TblIcon");
const TblIndomievoucher_1 = require("../models/entities/TblIndomievoucher");
const TblLiveclass_1 = require("../models/entities/TblLiveclass");
const TblLiveclassChats_1 = require("../models/entities/TblLiveclassChats");
const TblLiveclassUser_1 = require("../models/entities/TblLiveclassUser");
const TblMulticourseList_1 = require("../models/entities/TblMulticourseList");
const TblNews_1 = require("../models/entities/TblNews");
const TblNotification_1 = require("../models/entities/TblNotification");
const TblOptions_1 = require("../models/entities/TblOptions");
const TblParent_1 = require("../models/entities/TblParent");
const TblParentFeedback_1 = require("../models/entities/TblParentFeedback");
const TblParentReport_1 = require("../models/entities/TblParentReport");
const TblPasswordToken_1 = require("../models/entities/TblPasswordToken");
const TblPicuplocations_1 = require("../models/entities/TblPicuplocations");
const TblPractice_1 = require("../models/entities/TblPractice");
const TblPracticeLevel_1 = require("../models/entities/TblPracticeLevel");
const TblProductcolors_1 = require("../models/entities/TblProductcolors");
const TblProductimages_1 = require("../models/entities/TblProductimages");
const TblPromoCode_1 = require("../models/entities/TblPromoCode");
const TblQuestion_1 = require("../models/entities/TblQuestion");
const TblQuestionPracticeHistory_1 = require("../models/entities/TblQuestionPracticeHistory");
const TblQuestionTestHistory_1 = require("../models/entities/TblQuestionTestHistory");
const TblRating_1 = require("../models/entities/TblRating");
const TblReportData_1 = require("../models/entities/TblReportData");
const TblReportType_1 = require("../models/entities/TblReportType");
const TblSalesUser_1 = require("../models/entities/TblSalesUser");
const TblSession_1 = require("../models/entities/TblSession");
const TblSkipUsers_1 = require("../models/entities/TblSkipUsers");
const TblSpendTime_1 = require("../models/entities/TblSpendTime");
const TblStoreDeliveryaddresses_1 = require("../models/entities/TblStoreDeliveryaddresses");
const TblStoreHomebanner_1 = require("../models/entities/TblStoreHomebanner");
const TblStoreRecentview_1 = require("../models/entities/TblStoreRecentview");
const TblSubjects_1 = require("../models/entities/TblSubjects");
const TblSubmitBankTransfer_1 = require("../models/entities/TblSubmitBankTransfer");
const TblSubscription_1 = require("../models/entities/TblSubscription");
const TblSubscriptionText_1 = require("../models/entities/TblSubscriptionText");
const TblSubscriptionTime_1 = require("../models/entities/TblSubscriptionTime");
const TblSuggestion_1 = require("../models/entities/TblSuggestion");
const TblTabletVoucher_1 = require("../models/entities/TblTabletVoucher");
const TblTabletVoucherUsed_1 = require("../models/entities/TblTabletVoucherUsed");
const TblTeacher_1 = require("../models/entities/TblTeacher");
const TblTeacherNotification_1 = require("../models/entities/TblTeacherNotification");
const TblTeesasPlace_1 = require("../models/entities/TblTeesasPlace");
const TblTest_1 = require("../models/entities/TblTest");
const TblTestType_1 = require("../models/entities/TblTestType");
const TblTestimonal_1 = require("../models/entities/TblTestimonal");
const TblToken_1 = require("../models/entities/TblToken");
const TblTopicMedia_1 = require("../models/entities/TblTopicMedia");
const TblTopics_1 = require("../models/entities/TblTopics");
const TblTransaction_1 = require("../models/entities/TblTransaction");
const TblUser_1 = require("../models/entities/TblUser");
const TblUserAddress_1 = require("../models/entities/TblUserAddress");
const TblUserBadges_1 = require("../models/entities/TblUserBadges");
const TblUserClassHistory_1 = require("../models/entities/TblUserClassHistory");
const TblUserFeedback_1 = require("../models/entities/TblUserFeedback");
const TblUserHistory_1 = require("../models/entities/TblUserHistory");
const TblUserPayment_1 = require("../models/entities/TblUserPayment");
const TblUserPracticeHistory_1 = require("../models/entities/TblUserPracticeHistory");
const TblUserPromo_1 = require("../models/entities/TblUserPromo");
const TblUserReportQuestion_1 = require("../models/entities/TblUserReportQuestion");
const TblVoucher_1 = require("../models/entities/TblVoucher");
const TrackNumber_1 = require("../models/entities/TrackNumber");
exports.ModuleConfigs = {
    app: {
        entities: [
            TblAboutUs_1.TblAboutUs,
            TblAddUserSubscription_1.TblAddUserSubscription,
            TblAdmin_1.TblAdmin,
            TblUser_1.TblUser,
            TblVoucher_1.TblVoucher,
            TblTransaction_1.TblTransaction,
            TrackNumber_1.TrackNumber,
            TblUserReportQuestion_1.TblUserReportQuestion,
            TblUserPayment_1.TblUserPayment,
            TblUserPromo_1.TblUserPromo,
            TblUserPracticeHistory_1.TblUserPracticeHistory,
            TblUserHistory_1.TblUserHistory,
            TblUserFeedback_1.TblUserFeedback,
            TblUserClassHistory_1.TblUserClassHistory,
            TblUserBadges_1.TblUserBadges,
            TblUserAddress_1.TblUserAddress,
            TblTopics_1.TblTopics,
            TblTopicMedia_1.TblTopicMedia,
            TblToken_1.TblToken,
            TblTestimonal_1.TblTestimonal,
            TblTestType_1.TblTestType,
            TblTest_1.TblTest,
            TblTeesasPlace_1.TblTeesasPlace,
            TblTeacherNotification_1.TblTeacherNotification,
            TblTeacher_1.TblTeacher,
            TblTabletVoucher_1.TblTabletVoucher,
            TblTabletVoucherUsed_1.TblTabletVoucherUsed,
            TblSuggestion_1.TblSuggestion,
            TblSubscriptionTime_1.TblSubscriptionTime,
            TblSubscriptionText_1.TblSubscriptionText,
            TblSubscription_1.TblSubscription,
            TblSubmitBankTransfer_1.TblSubmitBankTransfer,
            TblSubjects_1.TblSubjects,
            TblStoreRecentview_1.TblStoreRecentview,
            TblStoreHomebanner_1.TblStoreHomebanner,
            TblStoreDeliveryaddresses_1.TblStoreDeliveryaddresses,
            TblSpendTime_1.TblSpendTime,
            TblSkipUsers_1.TblSkipUsers,
            TblSession_1.TblSession,
            TblSalesUser_1.TblSalesUser,
            TblReportType_1.TblReportType,
            TblReportData_1.TblReportData,
            TblRating_1.TblRating,
            TblQuestionTestHistory_1.TblQuestionTestHistory,
            TblQuestionPracticeHistory_1.TblQuestionPracticeHistory,
            TblQuestion_1.TblQuestion,
            TblPromoCode_1.TblPromoCode,
            TblPracticeLevel_1.TblPracticeLevel,
            TblPractice_1.TblPractice,
            TblPicuplocations_1.TblPicuplocations,
            TblPasswordToken_1.TblPasswordToken,
            TblReportData_1.TblReportData,
            TblParentReport_1.TblParentReport,
            TblParentFeedback_1.TblParentFeedback,
            TblParent_1.TblParent,
            TblOptions_1.TblOptions,
            TblNotification_1.TblNotification,
            TblNews_1.TblNews,
            TblMulticourseList_1.TblMulticourseList,
            TblLiveclass_1.TblLiveclass,
            TblLiveclassChats_1.TblLiveclassChats,
            TblLiveclassUser_1.TblLiveclassUser,
            TblIndomievoucher_1.TblIndomievoucher,
            TblIcon_1.TblIcon,
            TblEmailStore_1.TblEmailStore,
            TblEbookRating_1.TblEbookRating,
            TblEbookOrder_1.TblEbookOrder,
            TblEbook_1.TblEbook,
            TblEbbokComment_1.TblEbbokComment,
            TblDownloadSample_1.TblDownloadSample,
            TblDonation_1.TblDonation,
            TblCourses_1.TblCourses,
            TblCountry_1.TblCountry,
            TblContent_1.TblContent,
            TblContact_1.TblContact,
            TblColorPlats_1.TblColorPlats,
            TblClassStandard_1.TblClassStandard,
            TblChapter_1.TblChapter,
            TblCart_1.TblCart,
            TblCardDetails_1.TblCardDetails,
            TblBookmarks_1.TblBookmarks,
            TblBanner_1.TblBanner,
            TblBankDetails_1.TblBankDetails,
            TblBadges_1.TblBadges,
            TblApplyVoucher_1.TblApplyVoucher,
            TblAppContent_1.TblAppContent,
            TblAddUserSubscription_1.TblAddUserSubscription,
            TblProductimages_1.TblProductimages,
            TblProductcolors_1.TblProductcolors,
            TableUsers_1.TableUsers,
            TableUserClassHistories_1.TableUserClassHistories,
            TableParents_1.TableParents,
            Stores_1.Stores,
            States_1.States,
            SevenHabitRegistration_1.SevenHabitRegistration,
            Roles_1.Roles,
            QuestionOptions_1.QuestionOptions,
            PasswordResets_1.PasswordResets,
            Orders_1.Orders,
            OrderDetails_1.OrderDetails,
            OrderAddresses_1.OrderAddresses,
            Migrations_1.Migrations,
            GeoZones_1.GeoZones,
            FailedJobs_1.FailedJobs,
            ExamPreparation_1.ExamPreparation,
            CountryList_1.CountryList,
            Countries_1.Countries,
            Cities_1.Cities,
            Adminchats_1.Adminchats,
            AdminSupport_1.AdminSupport,
            Addstores_1.Addstores,
        ],
    },
    utils: {
        entities: [
            CountryList_1.CountryList,
            TblUser_1.TblUser,
            TblCourses_1.TblCourses,
            TblClassStandard_1.TblClassStandard,
            TblSubjects_1.TblSubjects,
            TblChapter_1.TblChapter,
        ],
    },
    auth: {
        entities: [TblUser_1.TblUser, TblParent_1.TblParent],
    },
    content: {
        entities: [TblSubjects_1.TblSubjects, TblCourses_1.TblCourses],
    },
};
//# sourceMappingURL=constants.js.map