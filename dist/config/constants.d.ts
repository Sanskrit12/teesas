import { AdminSupport } from 'src/models/entities/AdminSupport';
import { Adminchats } from 'src/models/entities/Adminchats';
import { Cities } from 'src/models/entities/Cities';
import { Countries } from 'src/models/entities/Countries';
import { CountryList } from 'src/models/entities/CountryList';
import { FailedJobs } from 'src/models/entities/FailedJobs';
import { GeoZones } from 'src/models/entities/GeoZones';
import { Migrations } from 'src/models/entities/Migrations';
import { OrderAddresses } from 'src/models/entities/OrderAddresses';
import { Orders } from 'src/models/entities/Orders';
import { QuestionOptions } from 'src/models/entities/QuestionOptions';
import { Roles } from 'src/models/entities/Roles';
import { States } from 'src/models/entities/States';
import { Stores } from 'src/models/entities/Stores';
import { TableParents } from 'src/models/entities/TableParents';
import { TableUserClassHistories } from 'src/models/entities/TableUserClassHistories';
import { TableUsers } from 'src/models/entities/TableUsers';
import { TblAboutUs } from 'src/models/entities/TblAboutUs';
import { TblAddUserSubscription } from 'src/models/entities/TblAddUserSubscription';
import { TblApplyVoucher } from 'src/models/entities/TblApplyVoucher';
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
import { TblEbbokComment } from 'src/models/entities/TblEbbokComment';
import { TblEbook } from 'src/models/entities/TblEbook';
import { TblEbookOrder } from 'src/models/entities/TblEbookOrder';
import { TblEbookRating } from 'src/models/entities/TblEbookRating';
import { TblEmailStore } from 'src/models/entities/TblEmailStore';
import { TblIcon } from 'src/models/entities/TblIcon';
import { TblIndomievoucher } from 'src/models/entities/TblIndomievoucher';
import { TblLiveclassChats } from 'src/models/entities/TblLiveclassChats';
import { TblLiveclassUser } from 'src/models/entities/TblLiveclassUser';
import { TblMulticourseList } from 'src/models/entities/TblMulticourseList';
import { TblOptions } from 'src/models/entities/TblOptions';
import { TblParent } from 'src/models/entities/TblParent';
import { TblParentFeedback } from 'src/models/entities/TblParentFeedback';
import { TblParentReport } from 'src/models/entities/TblParentReport';
import { TblPasswordToken } from 'src/models/entities/TblPasswordToken';
import { TblPicuplocations } from 'src/models/entities/TblPicuplocations';
import { TblPractice } from 'src/models/entities/TblPractice';
import { TblProductcolors } from 'src/models/entities/TblProductcolors';
import { TblProductimages } from 'src/models/entities/TblProductimages';
import { TblPromoCode } from 'src/models/entities/TblPromoCode';
import { TblQuestion } from 'src/models/entities/TblQuestion';
import { TblQuestionPracticeHistory } from 'src/models/entities/TblQuestionPracticeHistory';
import { TblQuestionTestHistory } from 'src/models/entities/TblQuestionTestHistory';
import { TblReportData } from 'src/models/entities/TblReportData';
import { TblReportType } from 'src/models/entities/TblReportType';
import { TblSalesUser } from 'src/models/entities/TblSalesUser';
import { TblSession } from 'src/models/entities/TblSession';
import { TblSpendTime } from 'src/models/entities/TblSpendTime';
import { TblStoreDeliveryaddresses } from 'src/models/entities/TblStoreDeliveryaddresses';
import { TblStoreHomebanner } from 'src/models/entities/TblStoreHomebanner';
import { TblStoreRecentview } from 'src/models/entities/TblStoreRecentview';
import { TblSubjects } from 'src/models/entities/TblSubjects';
import { TblSubscription } from 'src/models/entities/TblSubscription';
import { TblSubscriptionText } from 'src/models/entities/TblSubscriptionText';
import { TblSubscriptionTime } from 'src/models/entities/TblSubscriptionTime';
import { TblTabletVoucher } from 'src/models/entities/TblTabletVoucher';
import { TblTabletVoucherUsed } from 'src/models/entities/TblTabletVoucherUsed';
import { TblTeacherNotification } from 'src/models/entities/TblTeacherNotification';
import { TblTestType } from 'src/models/entities/TblTestType';
import { TblToken } from 'src/models/entities/TblToken';
import { TblTopics } from 'src/models/entities/TblTopics';
import { TblTransaction } from 'src/models/entities/TblTransaction';
import { TblUser } from 'src/models/entities/TblUser';
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
export declare const ModuleConfigs: {
    app: {
        entities: (typeof TblTopics | typeof TblChapter | typeof TblAboutUs | typeof TblAddUserSubscription | typeof TblVoucher | typeof TblTransaction | typeof TrackNumber | typeof TblUserReportQuestion | typeof TblUserPayment | typeof TblUserPromo | typeof TblUserPracticeHistory | typeof TblUserHistory | typeof TblUserFeedback | typeof TblUserClassHistory | typeof TblUserBadges | typeof TblToken | typeof TblTestType | typeof TblTeacherNotification | typeof TblTabletVoucher | typeof TblTabletVoucherUsed | typeof TblSubscriptionTime | typeof TblSubscriptionText | typeof TblSubscription | typeof TblSubjects | typeof TblStoreRecentview | typeof TblStoreHomebanner | typeof TblStoreDeliveryaddresses | typeof TblSpendTime | typeof TblSession | typeof TblSalesUser | typeof TblReportType | typeof TblReportData | typeof TblQuestionTestHistory | typeof TblQuestionPracticeHistory | typeof TblQuestion | typeof TblPromoCode | typeof TblPractice | typeof TblPicuplocations | typeof TblPasswordToken | typeof TblParentReport | typeof TblParentFeedback | typeof TblOptions | typeof TblMulticourseList | typeof TblLiveclassChats | typeof TblLiveclassUser | typeof TblIndomievoucher | typeof TblIcon | typeof TblEmailStore | typeof TblEbookRating | typeof TblEbookOrder | typeof TblEbook | typeof TblEbbokComment | typeof TblDonation | typeof TblCourses | typeof TblCountry | typeof TblContent | typeof TblContact | typeof TblColorPlats | typeof TblClassStandard | typeof TblCart | typeof TblCardDetails | typeof TblBookmarks | typeof TblBanner | typeof TblBankDetails | typeof TblApplyVoucher | typeof TblProductimages | typeof TblProductcolors | typeof TableUsers | typeof TableUserClassHistories | typeof TableParents | typeof Stores | typeof States | typeof Roles | typeof QuestionOptions | typeof Orders | typeof OrderAddresses | typeof Migrations | typeof GeoZones | typeof FailedJobs | typeof CountryList | typeof Countries | typeof Cities | typeof Adminchats | typeof AdminSupport)[];
    };
    utils: {
        entities: (typeof TblChapter | typeof TblUser | typeof TblSubjects | typeof TblCourses | typeof TblClassStandard | typeof CountryList)[];
    };
    auth: {
        entities: (typeof TblUser | typeof TblParent)[];
    };
    content: {
        entities: (typeof TblSubjects | typeof TblCourses)[];
    };
};
