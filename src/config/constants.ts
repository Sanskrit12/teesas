import { Addstores } from 'src/models/entities/Addstores';
import { AdminSupport } from 'src/models/entities/AdminSupport';
import { Adminchats } from 'src/models/entities/Adminchats';
import { Cities } from 'src/models/entities/Cities';
import { Countries } from 'src/models/entities/Countries';
import { CountryList } from 'src/models/entities/CountryList';
import { ExamPreparation } from 'src/models/entities/ExamPreparation';
import { FailedJobs } from 'src/models/entities/FailedJobs';
import { GeoZones } from 'src/models/entities/GeoZones';
import { Migrations } from 'src/models/entities/Migrations';
import { OrderAddresses } from 'src/models/entities/OrderAddresses';
import { OrderDetails } from 'src/models/entities/OrderDetails';
import { Orders } from 'src/models/entities/Orders';
import { PasswordResets } from 'src/models/entities/PasswordResets';
import { QuestionOptions } from 'src/models/entities/QuestionOptions';
import { Roles } from 'src/models/entities/Roles';
import { SevenHabitRegistration } from 'src/models/entities/SevenHabitRegistration';
import { States } from 'src/models/entities/States';
import { Stores } from 'src/models/entities/Stores';
import { TableParents } from 'src/models/entities/TableParents';
import { TableUserClassHistories } from 'src/models/entities/TableUserClassHistories';
import { TableUsers } from 'src/models/entities/TableUsers';
import { TblAboutUs } from 'src/models/entities/TblAboutUs';
import { TblAddUserSubscription } from 'src/models/entities/TblAddUserSubscription';
import { TblAdmin } from 'src/models/entities/TblAdmin';
import { TblAppContent } from 'src/models/entities/TblAppContent';
import { TblApplyVoucher } from 'src/models/entities/TblApplyVoucher';
import { TblBadges } from 'src/models/entities/TblBadges';
import { TblBankDetails } from 'src/models/entities/TblBankDetails';
import { TblBanner } from 'src/models/entities/TblBanner';
import { TblBookmarks } from 'src/models/entities/TblBookmarks';
import { TblCardDetails } from 'src/models/entities/TblCardDetails';
import { TblCart } from 'src/models/entities/TblCart';
import { TblChapter } from 'src/models/entities/TblChapter';
import { TblClassStandard } from 'src/models/entities/TblClassStandard';
import { TblColorPlats } from 'src/models/entities/TblColorPlats';
import { TblContact } from 'src/models/entities/TblContact';
import { TblContent } from 'src/models/entities/TblContent';
import { TblCountry } from 'src/models/entities/TblCountry';
import { TblCourses } from 'src/models/entities/TblCourses';
import { TblDonation } from 'src/models/entities/TblDonation';
import { TblDownloadSample } from 'src/models/entities/TblDownloadSample';
import { TblEbbokComment } from 'src/models/entities/TblEbbokComment';
import { TblEbook } from 'src/models/entities/TblEbook';
import { TblEbookOrder } from 'src/models/entities/TblEbookOrder';
import { TblEbookRating } from 'src/models/entities/TblEbookRating';
import { TblEmailStore } from 'src/models/entities/TblEmailStore';
import { TblIcon } from 'src/models/entities/TblIcon';
import { TblIndomievoucher } from 'src/models/entities/TblIndomievoucher';
import { TblLiveclass } from 'src/models/entities/TblLiveclass';
import { TblLiveclassChats } from 'src/models/entities/TblLiveclassChats';
import { TblLiveclassUser } from 'src/models/entities/TblLiveclassUser';
import { TblMulticourseList } from 'src/models/entities/TblMulticourseList';
import { TblNews } from 'src/models/entities/TblNews';
import { TblNotification } from 'src/models/entities/TblNotification';
import { TblOptions } from 'src/models/entities/TblOptions';
import { TblParent } from 'src/models/entities/TblParent';
import { TblParentFeedback } from 'src/models/entities/TblParentFeedback';
import { TblParentReport } from 'src/models/entities/TblParentReport';
import { TblPasswordToken } from 'src/models/entities/TblPasswordToken';
import { TblPicuplocations } from 'src/models/entities/TblPicuplocations';
import { TblPractice } from 'src/models/entities/TblPractice';
import { TblPracticeLevel } from 'src/models/entities/TblPracticeLevel';
import { TblProductcolors } from 'src/models/entities/TblProductcolors';
import { TblProductimages } from 'src/models/entities/TblProductimages';
import { TblPromoCode } from 'src/models/entities/TblPromoCode';
import { TblQuestion } from 'src/models/entities/TblQuestion';
import { TblQuestionPracticeHistory } from 'src/models/entities/TblQuestionPracticeHistory';
import { TblQuestionTestHistory } from 'src/models/entities/TblQuestionTestHistory';
import { TblRating } from 'src/models/entities/TblRating';
import { TblReportData } from 'src/models/entities/TblReportData';
import { TblReportType } from 'src/models/entities/TblReportType';
import { TblSalesUser } from 'src/models/entities/TblSalesUser';
import { TblSession } from 'src/models/entities/TblSession';
import { TblSkipUsers } from 'src/models/entities/TblSkipUsers';
import { TblSpendTime } from 'src/models/entities/TblSpendTime';
import { TblStoreDeliveryaddresses } from 'src/models/entities/TblStoreDeliveryaddresses';
import { TblStoreHomebanner } from 'src/models/entities/TblStoreHomebanner';
import { TblStoreRecentview } from 'src/models/entities/TblStoreRecentview';
import { TblSubjects } from 'src/models/entities/TblSubjects';
import { TblSubmitBankTransfer } from 'src/models/entities/TblSubmitBankTransfer';
import { TblSubscription } from 'src/models/entities/TblSubscription';
import { TblSubscriptionText } from 'src/models/entities/TblSubscriptionText';
import { TblSubscriptionTime } from 'src/models/entities/TblSubscriptionTime';
import { TblSuggestion } from 'src/models/entities/TblSuggestion';
import { TblTabletVoucher } from 'src/models/entities/TblTabletVoucher';
import { TblTabletVoucherUsed } from 'src/models/entities/TblTabletVoucherUsed';
import { TblTeacher } from 'src/models/entities/TblTeacher';
import { TblTeacherNotification } from 'src/models/entities/TblTeacherNotification';
import { TblTeesasPlace } from 'src/models/entities/TblTeesasPlace';
import { TblTest } from 'src/models/entities/TblTest';
import { TblTestType } from 'src/models/entities/TblTestType';
import { TblTestimonal } from 'src/models/entities/TblTestimonal';
import { TblToken } from 'src/models/entities/TblToken';
import { TblTopicMedia } from 'src/models/entities/TblTopicMedia';
import { TblTopics } from 'src/models/entities/TblTopics';
import { TblTransaction } from 'src/models/entities/TblTransaction';
import { TblUser } from 'src/models/entities/TblUser';
import { TblUserAddress } from 'src/models/entities/TblUserAddress';
import { TblUserBadges } from 'src/models/entities/TblUserBadges';
import { TblUserClassHistory } from 'src/models/entities/TblUserClassHistory';
import { TblUserFeedback } from 'src/models/entities/TblUserFeedback';
import { TblUserHistory } from 'src/models/entities/TblUserHistory';
import { TblUserPayment } from 'src/models/entities/TblUserPayment';
import { TblUserPracticeHistory } from 'src/models/entities/TblUserPracticeHistory';
import { TblUserPromo } from 'src/models/entities/TblUserPromo';
import { TblUserReportQuestion } from 'src/models/entities/TblUserReportQuestion';
import { TblVoucher } from 'src/models/entities/TblVoucher';
import { TrackNumber } from 'src/models/entities/TrackNumber';

export const ModuleConfigs = {
  app: {
    entities: [
      TblAboutUs,
      TblAddUserSubscription,
      TblAdmin,
      TblUser,
      TblVoucher,
      TblTransaction,
      TrackNumber,
      TblUserReportQuestion,
      TblUserPayment,
      TblUserPromo,
      TblUserPracticeHistory,
      TblUserHistory,
      TblUserFeedback,
      TblUserClassHistory,
      TblUserBadges,
      TblUserAddress,
      TblTopics,
      TblTopicMedia,
      TblToken,
      TblTestimonal,
      TblTestType,
      TblTest,
      TblTeesasPlace,
      TblTeacherNotification,
      TblTeacher,
      TblTabletVoucher,
      TblTabletVoucherUsed,
      TblSuggestion,
      TblSubscriptionTime,
      TblSubscriptionText,
      TblSubscription,
      TblSubmitBankTransfer,
      TblSubjects,
      TblStoreRecentview,
      TblStoreHomebanner,
      TblStoreDeliveryaddresses,
      TblSpendTime,
      TblSkipUsers,
      TblSession,
      TblSalesUser,
      TblReportType,
      TblReportData,
      TblRating,
      TblQuestionTestHistory,
      TblQuestionPracticeHistory,
      TblQuestion,
      TblPromoCode,
      TblPracticeLevel,
      TblPractice,
      TblPicuplocations,
      TblPasswordToken,
      TblReportData,
      TblParentReport,
      TblParentFeedback,
      TblParent,
      TblOptions,
      TblNotification,
      TblNews,
      TblMulticourseList,
      TblLiveclass,
      TblLiveclassChats,
      TblLiveclassUser,
      TblIndomievoucher,
      TblIcon,
      TblEmailStore,
      TblEbookRating,
      TblEbookOrder,
      TblEbook,
      TblEbbokComment,
      TblDownloadSample,
      TblDonation,
      TblCourses,
      TblCountry,
      TblContent,
      TblContact,
      TblColorPlats,
      TblClassStandard,
      TblChapter,
      TblCart,
      TblCardDetails,
      TblBookmarks,
      TblBanner,
      TblBankDetails,
      TblBadges,
      TblApplyVoucher,
      TblAppContent,
      TblAddUserSubscription,
      TblProductimages,
      TblProductcolors,
      TableUsers,
      TableUserClassHistories,
      TableParents,
      Stores,
      States,
      SevenHabitRegistration,
      Roles,
      QuestionOptions,
      PasswordResets,
      Orders,
      OrderDetails,
      OrderAddresses,
      Migrations,
      GeoZones,
      FailedJobs,
      ExamPreparation,
      CountryList,
      Countries,
      Cities,
      Adminchats,
      AdminSupport,
      Addstores,
    ],
  },
  utils: {
    entities: [CountryList, TblUser, TblCourses],
  },
  auth: {
    entities: [TblUser, TblParent],
  },
};
