import ajeobaLogo from "../assets/Images/ajeoba-logo.png";
import {
  METALLIC_SILVER,
  SILVER_GREY,
  BLACK,
  LIGHT_SILVER_GREY,
  WHITE,
  ACTIVE_GREEN,
  PRIMARY_GREEN,
  LIGHT_GREY,
  DARK_GREY,
  RED,
  GREEN_OPAQ_20,
  DAVY_GREY,
} from "../styles/ColorConstant";
import {
  PARENT_CONTAINER_HEIGHT,
  PARENT_CONTAINER_PADDING,
  TABLE_HEIGHT_NO_BACKGROUND_TABS,
  TABLE_HEIGHT_NO_SEARCH_FILTER,
  WHITE_BOX_HEIGHT,
  TABLE_HEIGHT_NO_PAGINATION_NO_FILTER,
  TABLE_HEIGHT_NO_DATA_FOUND_NO_FILTER,
  TABLE_HEIGHT_NO_DATA_FOUND_SEARCH_FILTER,
} from "../styles/LayoutConstant";

export const commonStyles = {
  disclamer: {
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: "1rem",
    textAlign: "center",
    color: "#898B87",
    marginTop: "0.938rem",
  },
  mainGridContainer: {
    background: "#ffffff",
    height: "100vh",
  },
  marginRightCustom: {
    marginRight: "1.5rem",
  },
  marginBottom0: {
    marginBottom: "0rem",
  },
  paddingBottom0: {
    paddingBottom: "0rem",
  },
  heading: {
    marginLeft: "0.625rem",
    color: BLACK,
  },
  subscribeHeading: {
    color: BLACK,
    textAlign: "left",
    width: "90%",
    margin: ".75rem auto 0",
    paddingBlock: "8px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 4,
  },
  divider: {
    borderBottom: `2px solid ${ACTIVE_GREEN}!important`,
    width: "100%",
    marginBottom: "8px",
  },
  marginTop0: {
    marginTop: "0rem",
  },
  marginBottom32Bold: {
    marginBottom: "32px",
    fontWeight: "bold",
  },
  reportsMarginPadding: {
    marginTop: "0rem",
    paddingTop: "1rem",
  },
  responsiveNegativeMargin: {
    "@media (max-width:600px)": {
      marginTop: "-0.5rem",
    },
  },
  ajDropDownEllipsis: {
    "& .MuiTypography-root": {
      overflow: "hidden",
      width: "18.8rem",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      "@media (max-width:600px)": {
        width: "14rem",
      },
    },
  },

  ajDropDownEllipsisSelectSub: {
    width: "10%",
    "& .MuiTypography-root": {
      overflow: "hidden",
      width: "10rem",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      "@media (max-width:600px)": {
        width: "7rem",
        fontSize: ".8rem",
      },
    },
  },

  ajDropDownEllipsiss: {
    "& .MuiTypography-root": {
      overflow: "hidden",
      width: "full",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      "@media (max-width:600px)": {
        width: "14rem",
      },
    },
  },

  ajDropDownEllipsissDuration: {
    width: "2rem",
  },

  deleteDialogModal: {
    "& .MuiDialog-container": {
      marginTop: "7rem",
      height: "60%",
    },
  },
  anchorButtonStyle: {
    textDecoration: "underline",
    textTransform: "capitalize",
  },
  textPrimaryGreen: {
    color: PRIMARY_GREEN,
  },
  addressStyle: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    "@media (max-width: 600px)": {
      marginBottom: "0",
    },
  },
  certificateFieldContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "43.75rem",
    "@media(max-width: 600px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  certificateFieldContainerNEWfarmerdetailpage: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "@media(max-width: 768px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  certificateFieldContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "43.75rem",
    "@media(max-width: 600px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  certificateFieldContainerCustom: {
    "@media(max-width: 600px)": {
      flexDirection: "column",
      maxWidth: "17rem",
    },
  },
  colorWhite: {
    color: WHITE,
  },
  opacityStyle: {
    opacity: 0.5,
  },
  logoImageContainer: {
    marginTop: "3.125rem",
    marginLeft: "3.125rem",
    cursor: "pointer",
    backgroundImage: `url(${ajeobaLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundSize: "contain",
    width: "11.438rem",
    height: "4.5rem",
    "@media (max-width: 600px)": {
      width: "5.75rem",
      height: "2.25rem",
      marginTop: "1.5rem",
      marginLeft: "1rem",
    },
  },
  btnContainer: {
    "@media(max-width: 900px)": {
      flexDirection: "column",
    },
  },

  mainHeadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      minHeight: "auto",
      marginTop: "1.5rem",
    },
  },
  mainHeadingContainerLogisticsQuotationForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "52%",
    "@media (max-width: 600px)": {
      minHeight: "auto",
      width: "70%",
    },
  },

  mainHeading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
  mainHeadingBuyer: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },

  inputFiedLogQuotaion: {
    width: "100%",
    "@media (max-width: 600px)": {
      minWidth: "100%",
    },
  },

  inputFiedsBuyer: {
    width: "30%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },

  inputFiedsBuyername: {
    width: "63%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },

  formDetailsContainer: {
    marginTop: "4.063rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "30rem",
    padding: "0px",
    "@media (max-width: 600px)": {
      marginTop: "1.5rem",
      width: "80%",
      marginBottom: "2.875rem",
    },
  },

  formDetailsContainerlandingPage: {
    marginTop: "3rem",
    display: "flex",
    gap: "3rem",
    alignItems: "baseline",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100%",
    padding: "0px",
    "@media (max-width: 600px)": {
      marginTop: "1rem",
      width: "90%",
      flexDirection: "column",
      gap: "0rem",
    },
  },
  formDetailsLogisticsQuotation: {
    marginTop: "3rem",
    display: "flex",
    gap: "3rem",
    alignItems: "baseline",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100%",
    padding: "0px",
    "@media (max-width: 600px)": {
      gap: "1rem",
      flexDirection: "column",
    },
  },

  inputFiledsLogisticsQuotation: {
    width: "100%",
  },

  subHeading: {
    fontSize: "0.875rem",
    lineHeight: "1.313rem",
    color: BLACK,
    fontWeight: 400,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "1rem",
    backgroundColor: GREEN_OPAQ_20,
    margin: "1.5rem 0rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    alignItems: "center",
  },
  font600: {
    fontWeight: 600,
  },
  marginHeading: {
    margin: "0.5rem 0rem",
  },
  priceStyle: {
    fontSize: "2rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    color: ACTIVE_GREEN,
  },
  inputLabel: {
    width: "100%",
    color: DARK_GREY,
    fontSize: "0.875rem",
    lineHeight: "1.313rem",
    fontWeight: "500",
    "@media (max-width:768px)": {
      fontSize: "0.6rem",
    },
  },

  inputStyleSubscribe: {
    width: "100%",
    height: "3.5rem",
    padding: "1rem",
    marginTop: "0.5rem",
    background: "#FFFFFF",
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "input[type='password']": {
      paddingLeft: "0px",
    },
  },
  inputStyleSubscribeselect: {
    width: "20%",
    height: "3rem",
    padding: "0.5rem",
    background: "#FFFFFF",
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "input[type='password']": {
      paddingLeft: "0px",
    },
  },

  adornmentStyle: {
    color: DARK_GREY,
    fontSize: "0.875rem",
  },
  startAdornmentStyle: { marginRight: "0.25rem" },
  inputStyle: {
    width: "100%",
    height: "3.5rem",
    padding: "1rem",
    marginTop: "0.5rem",
    background: "#FFFFFF",
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "input[type='password']": {
      paddingLeft: "0px",
    },
  },
  inputStyleproductyield: {
    width: "100%",
    flex: "1",
    height: "3.5rem",
    padding: "1rem",
    marginTop: "0.5rem",
    background: "#FCFCFC",
    border: "1px solid rgba(109, 158, 63, 0.15)",
    borderRadius: "8px",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "input[type='password']": {
      paddingLeft: "0px",
    },
  },

  inputStyleSignupLandingPage: {
    width: "100%",
    height: "3.5rem",
    padding: "1rem",
    marginTop: "0.5rem",
    background: "#FFFFFF",
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "input[type='password']": {
      paddingLeft: "0px",
    },
    "input[type='placeHolder']": {
      fontSize: "2px",
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
  },

  inputStyleSubscribe: {
    width: "100%",
    height: "3.5rem",
    padding: "1rem",
    marginTop: "0.5rem",
    background: "#FFFFFF",
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "input[type='password']": {
      paddingLeft: "0px",
    },
  },

  phoneNumberInput: {
    width: "23.563rem",
    borderRadius: "0px 0.5rem 0.5rem 0px",
    marginTop: "0px",
  },

  errorText: {
    width: "100%",
    marginTop: "0.5rem",
    color: "red",
    height: "1.25rem",
    fontSize: "0.875rem",
  },
  customErrorText: {
    "@media (max-width:600px)": {
      marginBottom: "0.625rem",
    },
  },

  leftGrid: {
    backgroundRepeat: "no-repeat",
    backgroundColor: (t) =>
      t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    "@media (max-width: 600px)": {
      height: "40%",
    },
  },

  rightGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0",
  },

  rightGridBuyer: {
    display: "flex",
    maxWidth: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0",
  },

  fieldMargin: {
    width: "100%",
    marginTop: "1.125rem",
  },

  fieldMarginBuyer: {
    width: "100%",
    // marginTop: "1rem",
  },

  marginTopRoot: {
    marginTop: "3.25rem",
  },

  marginBottomRoot: {
    marginBottom: "2.25rem",
  },

  flexFullWidth: {
    width: "100%",
    display: "flex",
    // marginTop: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
  },

  flexFullWidthQa: {
    width: "100%",
    display: "flex",
    marginTop: "0.5rem",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },

  flexDirection: {
    flex: "1",
  },

  resize70percent: {
    width: "70%",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },

  flexGap: {
    marginRight: "4px",
    "@media (max-width:600px)": {
      marginRight: "0px",
    },
  },

  fullWidth: {
    width: "100%",
  },
  halfWidth: {
    width: "50%",
  },
  autoMargin: {
    margin: "5rem auto 0",
  },
  autoMarginQa: {
    margin: "1.5rem auto 0",
    "@media (max-width:600px)": {
      width: "100%",
      padding: "1rem",
    },
  },
  autoMarginQaT: {
    width: "fit-content",
    margin: "1.5rem auto 0",
    "@media (max-width:600px)": {
      width: "100%",
      margin: "0px auto",
    },
  },
  autoMarginQaBtn: {
    marginTop: "1.5rem",
    "@media (max-width:600px)": {
      width: "100%",
      padding: "1rem",
    },
  },
  autoMarginQaDropdown: {
    width: "80%",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  maxWidth: {
    maxWidth: "43.75rem",
  },
  customFieldWidth: {
    width: "49%",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },

  underlineStyle: {
    textDecoration: "underline",
    marginBottom: "0.938rem",
  },
  underlineStyleyeild: {
    textDecoration: "underline",
    marginBottom: "0.938rem",
    textAlign: "center",
  },
  backArrow: {
    position: "absolute",
    top: "3.375rem",
    left: "3.188rem",
    padding: 0,
    color: "#1F1F1F",
    "@media (max-width: 600px)": {
      top: "1.813rem",
      left: "1.25rem",
    },
  },

  verificationContainer: {
    "@media (max-width: 600px)": {
      marginTop: "1.5rem",
      width: "80%",
    },
    display: "flex",
    marginTop: "2rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "30rem",
  },
  customWidth: {
    width: "95%",
  },
  customWidthLogistics: {
    width: "100%",
    // marginLeft: "5rem",
  },
  logisticsListStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "65%",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
  logisticsListHeaderStyle: {
    fontWeight: "500",
    fontSize: "0.875rem",
    color: PRIMARY_GREEN,
    // flex: "0.1",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
  logisticsListingsStyle: {
    display: "flex",
    gap: "4rem",
    alignItems: "",
    margin: ".5rem 0",
  },

  buyDialogModalContainer: {
    height: "calc(100vh - 5rem)",
    width: "70%",
    "@media(max-width:600px)": {
      width: "90%",
    },
  },

  passwordCenterContent: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    maxWidth: "28.5rem",
    height: "2.25rem",
    fontFamily: "Poppins",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "0.75rem",
    lineHeight: "1.125rem",
    color: DARK_GREY,
    marginBottom: "7.375rem",
    "@media (max-width: 600px)": {
      width: "100%",
      marginBottom: "5.25rem",
      marginTop: "1rem",
    },
  },
  passwordcontent: {
    marginTop: "1.875rem",
    "@media (max-width: 600px)": {
      marginTop: "0",
    },
  },
  listItems: {
    "& li": {
      marginBottom: "0.5rem",
    },
    "& ul": {
      listStylePosition: "inside",
      padding: 0,
    },
  },

  passwordInput: {
    "& fieldset": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },

  relativePosition: {
    position: "relative",
  },

  height60: {
    "@media (max-width: 600px)": {
      height: "60%",
    },
  },
  paginationBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.25rem 0px",
  },
  textCapitalize: { textTransform: "capitalize" },
  signupFormMainGridContainer: {
    background: LIGHT_SILVER_GREY,
    display: "flex",
    flexDirection: "column",
    minHeight: `calc(100vh - ${PARENT_CONTAINER_HEIGHT})`,
    padding: PARENT_CONTAINER_PADDING,
    paddingTop: "0rem",
  },
  batchFormContainer: {
    marginTop: "1.25rem",
    height: "36rem",
    "@media (max-width: 600px)": {
      width: "100%",
      height: "0",
    },
  },

  forRefereeComponentInsideFarmerComponent: {
    justifyContent: "center",
    backgroundColor: WHITE,
    alignItems: "center",
    position: "relative",
    borderRadius: "0.5rem",
    marginTop: "-4.5rem",
    height: `calc(100vh - ${WHITE_BOX_HEIGHT})`,
    overflow: "auto",
    "@media (max-width: 600px)": {
      height: "auto",
      paddingTop: "1.25rem",
      overflow: "scroll",
    },
  },

  productOrderQaReportContentContainer: {
    justifyContent: "center",
    backgroundColor: WHITE,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    borderRadius: "0.5rem",
    marginTop: "5rem",
    height: `calc(78vh - ${WHITE_BOX_HEIGHT})`,
    "@media (max-width: 600px)": {
      height: "auto",
      paddingTop: "1.25rem",
      overflow: "scroll",
    },
  },

  qaMarginTop: {
    marginTop: "-40px",
  },

  signupFormMainContentContainer: {
    justifyContent: "center",
    backgroundColor: WHITE,
    alignItems: "center",
    position: "relative",
    borderRadius: "0.5rem",
    marginTop: "5rem",
    height: `calc(100vh - ${WHITE_BOX_HEIGHT})`,
    overflow: "auto",
    "@media (max-width: 600px)": {
      height: "auto",
      paddingTop: "1.25rem",
      overflow: "scroll",
    },
  },
  signupContentContainer: {
    display: "flex",
    flexDirection: "column",
    width: "48.75rem",
    marginBottom: "3.125rem",
    alignItems: "center",
    marginTop: "3rem",
    "@media (max-width: 1000px)": {
      width: "90%",
    },
  },
  blogContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "3.125rem",
    alignItems: "center",
    marginTop: "3rem",
    "@media (max-width: 1000px)": {
      width: "90%",
    },
  },
  farmerWalletdetpage: {
    display: "flex",
    flexDirection: "column",
    width: "48.75rem",
    marginBottom: "3.125rem",
    alignItems: "center",
    marginTop: "3rem",
    "@media (max-width: 1000px)": {
      width: "90%",
    },
  },
  outLinedButton: {
    color: ACTIVE_GREEN,
    lineHeight: "1.313rem",
    fontWeight: "600",
    borderRadius: "0.5rem",
    position: "absolute",
    width: "7.5rem",
    right: "1.875rem",
    top: "0.75rem",
    backgroundColor: WHITE,
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
      color: WHITE,
    },
  },
  subHeadingColor: {
    color: BLACK,
  },

  signupHeadingStyle: {
    color: "#006D33",
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
    fontWeight: "500",
    marginBottom: "2.25rem",
    "@media (max-width: 600px)": {
      textAlign: "center",
    },
  },
  imageBox: {
    width: "12rem",
    height: "7.4rem",
    borderRadius: "0.5rem",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: DAVY_GREY,
  },

  signupFormContainer: {
    display: "flex",
    width: "100%",
    padding: "0px",
    marginTop: "3.125rem",
    flexWrap: "wrap",
    justifyContent: "space-between",
    textAlign: "left",
    "@media (max-width: 600px)": {
      marginTop: "1.5rem",
      width: "80%",
    },
  },

  atRefereeFarmer: {
    marginTop: "3rem",
  },

  signupFormFieldContainer: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    width: "21.25rem",
  },

  filtercountrysmd: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    // width: "21.25rem",
  },
  filtercheckboxmarkeplace: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    width: "21.25rem",
  },

  randomSubscribeFormFieldContainer: {
    margin: ".75rem auto 0",
    display: "flex",
    flexDirection: "column",
    width: "30rem",
    paddingBlock: ".5rem",
  },

  randomSubscribeFormContainer: {
    margin: ".75rem auto 0",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingBlock: ".5rem",
    "@media(max-width:600px)": {
      margin: "0",
    },
  },

  randomSubscribeContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    width: "fit-content",
    "@media(max-width:600px)": {
      margin: "0",
    },
  },

  randomSubscribeContainerSubmitButton: {
    width: "80%",
    height: "3.5rem",
    bordrRadius: "0.5rem",
    backgroundColor: ACTIVE_GREEN,
    color: WHITE,
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
    },
    "@media(max-width:600px)": {
      marginTop: "0px",
    },
  },

  randomSubscribeContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    width: "80%",
    "@media(max-width:600px)": {
      margin: "0",
    },
  },

  signupFormFieldContainerSubscribeButton: {
    margin: ".75rem auto 0",
    display: "flex",
    flexDirection: "row",
    width: "22rem",
    gap: 1,
    paddingBlock: ".5rem",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },

  marginTop20: {
    // marginTop: "1.25rem",
  },

  buyerPhone: {
    flex: 1,
  },

  flexStart: {
    justifyContent: "start",
  },
  customSrollBar: {
    "&::-webkit-scrollbar": {
      width: "0.3em",
      height: "0.3rem",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 0.375rem rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 0.375rem rgba(0,0,0,0.00)",
      width: "0.438rem",
      borderRadius: "0.75rem",
      background: SILVER_GREY,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      borderRadius: "0.75rem",
      background: METALLIC_SILVER,
    },
  },
  tableText: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: BLACK,
    textTransform: "capitalize",
    marginLeft: "0.625rem",
  },
  reportsTableText: {
    marginTop: "1.2rem",
    marginLeft: "1.625rem",
  },
  ligthSilverGreyBG: {
    backgroundColor: LIGHT_SILVER_GREY,
  },
  adminWhiteContainer: {
    backgroundColor: WHITE,
    margin: "2rem 3.125rem 3.125rem 3.125rem",
    minHeight: "calc(100vh - 12.875rem)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    borderRadius: "0.5rem",
    paddingTop: "2.875rem",
    paddingBottom: "2.875rem",
    "@media (max-width: 600px)": {
      margin: "2rem 1rem 1rem 1rem",
      paddingTop: "2rem",
      paddingBottom: "2rem",
      minHeight: "calc(100vh - 6.75rem)",
      width: "80%",
    },
  },
  autoHeight: {
    height: "auto",
    "@media (max-width: 600px)": {
      minHeight: "100vh",
    },
  },
  alignRight: {
    width: "100%",
    textAlign: "right",
  },
  adminPhoneNumberContainer: {
    display: "flex",
    marginTop: "0.5rem",
  },
  marginBottom160: {
    marginBottom: "10rem !important",
  },
  disableInput: {
    background: LIGHT_GREY,
  },
  disableSearchInputIconColor: {
    "& .MuiAutocomplete-popupIndicator": {
      "& .MuiSvgIcon-root": {
        color: DARK_GREY,
      },
    },
  },
  disableActiveInActiveBtn: {
    "&:disabled": {
      backgroundColor: DARK_GREY,
    },
  },
  noContentBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2.188rem",
    height: "calc(100vh - 18.3rem)",
  },
  noContentBoxLanifnpage: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2.188rem",
    height: "calc(100vh - 90.3rem)",
  },
  noContentBoxCustom: {
    height: "calc(100vh - 27rem)",
  },
  dropDownResponsive: {
    "@media(max-width: 600px)": {
      width: "100%",
      minWidth: "0",
    },
  },
  selectedMessage: {
    "@media (max-width: 600px)": {
      textAlign: "center",
    },
  },
  heightStyle: {
    height: "3.125rem",
    textAlign: "center",
  },
  alignCenter: {
    textAlign: "center",
  },
  noDataText: {
    color: ACTIVE_GREEN,
  },
  buttonBox: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    textAlign: "center",
    marginTop: "1rem",
  },
  buttonBoxsm: {
    textAlign: "center",
    marginTop: "5rem",
  },
  applycancelfilter: {
    display: "flex",
    gap: "4rem",
    marginTop: "2rem",
  },
  buttonStyle: {
    marginBottom: "1.125rem",
    width: "12.313rem",
    height: "3.5rem",
    marginRight: "0.625rem",
    boxSizing: "border-box",
    border: "0.063rem solid #6d9e3f",
    borderRadius: "0.5rem",
    marginTop: "0px",
  },
  buttonStylesmapp: {
    marginBottom: "1.125rem",
    width: "8.313rem",
    height: "3rem",
    marginRight: "0.625rem",
    boxSizing: "border-box",
    border: "0.063rem solid #6d9e3f",
    borderRadius: "0.5rem",
    marginTop: "0px",
  },
  buttonStylesmclear: {
    marginBottom: "1.125rem",
    width: "8.313rem",
    height: "3rem",
    marginRight: "0.625rem",
    boxSizing: "border-box",
    border: "0.063rem solid #6d9e3f",
    borderRadius: "0.5rem",
    marginTop: "0px",
  },
  applybuttonStyle: {
    width: "8.313rem",
    height: "3rem",
    boxSizing: "border-box",
    border: "0.063rem solid #6d9e3f",
    borderRadius: "0.5rem",
    marginTop: "0px",
  },
  cancelButton: {
    "&:hover": {
      backgroundColor: "white",
      color: "6d9e3f",
    },
  },
  applyFilterButton: {
    backgroundColor: "#6d9e3f",
    color: "white",
    "&:hover": {
      backgroundColor: "#6d9e3f",
      color: "white",
    },
  },
  editBtn: {
    color: ACTIVE_GREEN,
    lineHeight: "1.313rem",
    fontWeight: "600",
    borderRadius: "0.5rem",
    position: "absolute",
    width: "7.5rem",
    right: "1.875rem",
    top: "0.75rem",
    backgroundColor: WHITE,
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
      color: WHITE,
    },
  },
  editBtnCustom: {
    top: "-0.5rem",
    width: "8rem",
    "@media (max-width: 600px)": {
      marginTop: "10rem",
    },
  },
  truckDetailEditBtn: {
    "@media (max-width: 600px)": {
      right: "34%",
      top: "4rem",
    },
  },
  cancelBtnStyle: {
    marginTop: "1.875rem",
    marginRight: "1.25rem",
    fontSize: "0.875rem",
    color: ACTIVE_GREEN,
    lineHeight: "1.313rem",
    fontWeight: "600",
    borderRadius: "0.5rem",
    backgroundColor: WHITE,
    width: "13.188rem",
    height: "3.5rem",
    textTransform: "unset",
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
      color: WHITE,
    },
    "@media (max-width: 1000px)": {
      marginRight: "0px",
    },
  },

  textEllipsis: {
    "@media (max-width: 1000px)": {
      textOverflow: "ellipsis",
      textAlign: "center",
      overflow: "hidden",
      width: "13.125rem",
      margin: "0 auto",
      whiteSpace: "nowrap",
    },
  },
  colorRed: {
    color: RED,
  },
  colorGreen: {
    color: ACTIVE_GREEN,
  },
  dialogContainer: {
    "& .MuiDialog-container": {
      marginTop: "7rem",
      height: "80%",
    },
  },
  dialogContainerforhomepage: {
    "& .MuiDialog-container": {
      "& .MuiDialog-container": {
        marginTop: "7rem",
        height: "80%",
      },
      //   "@media(max-width: 768px)": {
      //     width: "35rem",
      //   },
      //   "@media(max-width: 468px)": {
      //     width: "20rem",
      //     display: "flex",
      //     justifyContent: "center",
      //     height: "70%",
      //   },
    },
  },
  searchDropdownInput: {
    width: "100%",
    height: "3.5rem",
    marginTop: "0.5rem",
    background: WHITE,
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiAutocomplete-popupIndicator": {
      "& .MuiSvgIcon-root": {
        color: ACTIVE_GREEN,
      },
    },
  },

  multiSelectChipDropDown: {
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",

    marginTop: "0.5rem",
    "& fieldset": {
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      minHeight: "3.5rem",
    },
    "& .MuiSelect-iconOpen": {
      borderRadius: "0.5rem 0px 0px 0.5rem",
    },
  },
  dividerStyle: {
    width: "100%",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    opacity: "0.07",
  },
  changeDownloadBtnStyle: {
    textDecoration: "underline",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    marginLeft: "0.5rem",
    color: DARK_GREY,
  },
  backArrowStyle: {
    position: "absolute",
    top: "1.875rem",
    marginLeft: "2.4rem",
    width: "3.125rem",
    padding: 0,
    color: BLACK,
    zIndex: 5,
    "@media(max-width: 600px)": {
      marginLeft: "0.5rem",
    },
  },
  farmingAssociationLogo: {
    marginBottom: "0.375rem",
  },
  centerContainerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  moreCertificateButton: {
    marginTop: "0.625rem",
  },
  fieldTopMargin: {
    marginTop: "0.938rem",
  },
  detailTypographyStyleHead: {
    color: DARK_GREY,
    "@media (max-width:600px)": {
      marginTop: "1rem",
    },
  },
  customHeaderStyle: {
    "@media (max-width:600px)": {
      marginTop: "0rem",
    },
  },
  detailTypographyStyleData: {
    fontWeight: 400,
    color: BLACK,
  },
  detailTypographyStyle: {
    fontStyle: "normal",
    fontSize: "0.875rem",
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: "1.313rem",
    fontWeight: 500,
  },
  detailsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1.5rem",
  },
  detailFlex: {
    flexDirection: "column",
    flex: "1",
  },
  detailsMainContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "1.5rem 0 0 0",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
      width: "100%",
      gap: "0.313rem",
    },
  },
  phoneNumberContainer: {
    marginTop: "0.5rem",
    width: "100%",
    display: "flex",
  },
  mobileNumberInput: {
    width: "100%",
    borderRadius: "0rem 0.5rem 0.5rem 0rem",
    marginTop: "0rem",
  },
  fixedWidth: {
    width: "43.75rem",
  },
  noteBoxContainer: {
    width: "43.75rem",
    "@media(max-width: 600px)": {
      width: "15rem",
    },
  },
  productLabelStyle: {
    marginTop: "0rem",
  },
  toastMsgEllipsis: {
    width: "15rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  responsiveTypoDetailFields: {
    overflowWrap: "break-word",
  },
  mainContainerHeight: {
    minHeight: "calc(100vh - 0rem)",
  },
  subRegistrationContainer: {
    overflowY: "scroll",
    height: "calc(100vh - 10.8rem)",
    marginTop: "1.5rem",
  },
  mobileScreenFormContainer: {
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  backButtonPosition: {
    position: "absolute",
    top: "1.675rem",
    width: "3.125rem",
    padding: 0,
    color: "#1F1F1F",
    zIndex: 5,
    "@media(max-width: 600px)": {
      left: "0.5rem",
    },
    display: "flex",
    justifyContent: "flex-start",
  },
  warningTextPosition: {
    position: "absolute",
    top: "1.675rem",
    width: "100%",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    color: "#1F1F1F",
    zIndex: 5,
    "@media(max-width: 600px)": {
      left: "0.5rem",
      top: "1.9rem",
    },
  },
  backButtonBlackFont: {
    fontSize: "1.75rem",
  },
  backButtonWhiteFont: {
    fontSize: "1.75rem",
    marginTop: ".3rem",
    color: WHITE,
  },
  whiteBackButtonPosition: {
    position: "absolute",
    top: "3%",
    marginLeft: "1rem",
    width: "3.125rem",
    padding: 0,
    color: WHITE,
    zIndex: 5,
  },
  kycVerficationHeight: {
    height: "50rem",
  },
  productTypeStyle: {
    width: "100%",
  },
  ellipsisStyle: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  containerpadding: {
    padding: "0",
  },
  whiteContainerBackgroundTabs: {
    marginTop: "-4.375rem",
    justifyContent: "center",
    borderRadius: "0.5rem",
    overflow: "auto",
    height: "calc(100vh - 13.125rem)",
    backgroundColor: "#fff",
    width: "calc(100% - 3.4rem)",
    margin: "-4.375rem auto 0 auto",
    position: "relative",
  },
  whiteContainerBackgroundTabsfarmerDetais: {
    marginTop: "-4.375rem",
    justifyContent: "center",
    borderRadius: "0.5rem",
    overflow: "auto",
    height: "calc(100vh - 13.125rem)",
    backgroundColor: "#fff",
    width: "calc(100% - 3.4rem)",
    margin: "-4.375rem auto 0 auto",
    position: "relative",
  },
  marginTop5rem: {
    marginTop: "-5rem",
  },
  ellipsisMaxWidth: {
    maxWidth: "8rem",
  },
  justifyContentContainer: {
    justifyContent: "start",
  },
  exportBtn: {
    textTransform: "capitalize",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    textDecoration: "underline",
    fontWeight: "400",
  },
  disableColor: {
    "&.MuiButton-root.Mui-disabled": {
      color: DARK_GREY,
    },
  },
};

export const customCommonStyles = {
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: LIGHT_GREY,
    minHeight: `calc(100vh - ${PARENT_CONTAINER_HEIGHT})`,
    padding: PARENT_CONTAINER_PADDING,
    paddingTop: "1.25rem",
    "@media (max-width:600px)": {
      padding: "0.625rem",
    },
  },
  productOrderQaContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: WHITE,
    alignItems: "center",
    borderRadius: "0.5rem",
    marginTop: "5rem",
    position: "relative",
    minHeight: `calc(78vh - ${WHITE_BOX_HEIGHT})`,
    padding: PARENT_CONTAINER_PADDING,
    paddingTop: ".75rem",
    "@media (max-width:600px)": {
      padding: "0.625rem",
      height: "auto",
      paddingTop: "1.25rem",
      overflow: "scroll",
    },
  },
  productOrderQa: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  subHeaderStyle: {
    display: "flex",
    margin: "1.25rem",
    alignItems: "center",
    width: "100%",
  },
  subHeaderStylelandingPage: {
    display: "flex",
    alignItems: "center",
    padding: "0",
  },

  spaceBetweenFlex: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:600px)": { flexDirection: "column" },
  },
  flexStyle: {
    display: "flex",
  },
  responsiveFlexStyle: {
    "@media(max-width: 600px)": {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  inputInventorySubHeaderStyle: {
    marginTop: "0",
    paddingTop: "1rem",
    "@media(max-width: 600px)": {
      flexDirection: "column",
    },
  },
  reportsHeight: {
    height: "calc(100vh - 23.5rem)",
  },
  reportsTableHeight: {
    height: `calc(100vh - 26rem)`,
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  customHistoryTableHeight: {
    height: `calc(100vh - 22.6rem)`,
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  reportsMainContainer: {
    padding: "0px",
    minHeight: `calc(100vh - 11.7rem)`,
    "@media (max-width:600px)": {
      padding: "0rem",
    },
  },
  inputReportsMainContainer: {
    padding: "0px",
    minHeight: `calc(100vh - 11.7rem)`,
  },
  headerText: {
    fontSize: "0.875rem",
    lineHeight: "1.313rem",
    fontWeight: 500,
    color: ACTIVE_GREEN,
  },

  subContentBox: {
    backgroundColor: WHITE,
    minHeight: "60vh",
    marginTop: "1.25rem",
    borderRadius: "0.375rem",
    maxWidth: "100%",
  },

  subContentBoxLandingPAge: {
    minHeight: "60vh",
    borderRadius: "0.375rem",
    width: "100%",
  },

  subContentBoxProductListExpanded: {
    minHeight: "86vh",
    width: "100%",
    display: "flex",
    gap: "3rem",
    margin: "2rem auto 0.5rem auto",
    padding: "0 1rem",
    "@media(max-width:600px)": {
      gap: "0",
    },
  },

  productListingBackground: {
    backgroundColor: "#fbfbfb",
  },

  reportsSubContentBox: {
    marginTop: 0,
    width: "100%",
  },

  headerBox: {
    display: "flex",
    alignItems: "center",
  },
  headerBoxQa: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBlock: "-.5rem 32px",
  },
  addButtonStyle: {
    width: "7.938rem",
    height: "3.5rem",
    bordrRadius: "0.5rem",
    backgroundColor: ACTIVE_GREEN,
    color: WHITE,
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
    },
    "@media(max-width:600px)": {
      marginTop: "0px",
    },
  },
  addButtonStyleSubscriptionDashboard: {
    width: "7.938rem",
    height: "3.5rem",
    bordrRadius: "0.5rem",
    backgroundColor: ACTIVE_GREEN,
    color: WHITE,
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
    },
    "@media(max-width:600px)": {
      marginTop: "0px",
      width: "7.5rem",
      height: "2.8rem",
      fontSize: ".3rem",
    },
  },

  addButtonStyleSub: {
    width: "100%",
    height: "3.5rem",
    bordrRadius: "0.5rem",
    backgroundColor: ACTIVE_GREEN,
    color: WHITE,
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
    },
    "@media(max-width:600px)": {
      marginTop: "0px",
    },
  },
  addButtonStyleSubSelect: {
    width: "100%",
    height: "3.5rem",
    bordrRadius: "0.5rem",
    backgroundColor: ACTIVE_GREEN,
    color: WHITE,
    "&:hover": {
      backgroundColor: ACTIVE_GREEN,
    },
    "@media(max-width:600px)": {
      marginTop: "0px",
    },
  },
  tableWrapperStyles: {
    maxHeight: "25.625rem",
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  filterIcon: {
    cursor: "pointer",
    margin: "0px 1.5rem",
    "@media(max-width:600px)": {
      width: "1rem",
    },
  },
  iconBox: {
    backgroundColor: LIGHT_GREY,
    width: "5rem",
    height: "2.75rem",
    boxShadow: "0px 0.375rem 0.75rem rgba(0, 0, 0, 0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  iconBoxLandingPage: {
    backgroundColor: LIGHT_GREY,
    width: "5rem",
    height: "2.75rem",
    boxShadow: "0px 0.375rem 0.75rem rgba(0, 0, 0, 0.01)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "@media(max-width:600px)": {
      fontWeight: 400,
      fontSize: "0.6rem",
    },
  },
  iconBoxLandingPageSm: {
    width: "5rem",
    height: "2.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: 300,
    fontSize: "0.6rem",
    backgroundColor: ACTIVE_GREEN,
    borderRadius: "3px",
  },
  searchIcon: {
    color: ACTIVE_GREEN,
  },
  searchIconLanindingPage: {
    color: "white",
  },
  widthNone: { width: "none" },
  clearFilterStyle: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    textDecoration: "underline",
    color: PRIMARY_GREEN,
    cursor: "pointer",
  },
  clearFilterStyleSubDashboard: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    textDecoration: "underline",
    color: PRIMARY_GREEN,
    cursor: "pointer",
    "@media(max-width:600px)": {
      fontWeight: 400,
      fontSize: "0.6rem",
      lineHeight: "1.1rem",
    },
  },
  filterInputBaseStyle: {
    width: "30rem",
    height: "2.75rem",
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    background: WHITE,
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    boxShadow: "0px 0.375rem 0.75rem rgba(0, 0, 0, 0.04)",
    borderRadius: "0.5rem",
    paddingLeft: "0.75rem",
  },
  filterInputBaseStyleLandingPage: {
    width: "70%",
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    border: "0.063rem solid #F2F2F2",
    boxSizing: "border-box",
    borderRadius: "0.5rem",
    paddingLeft: "0.75rem",
  },

  filterInputBaseStyleLandingSm: {
    minWidth: "100%",
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    border: "0.1rem solid #6D9E3F",
    boxSizing: "border-box",
    fontSize: "0.6rem",
    borderRadius: "0.5rem",
    paddingLeft: "0.75rem",
    "@media(max-width:480px)": {
      fontSize: "0.7rem",
      color: "#6d9e3f",
    },
  },

  responsiveWidthInputBase: {
    "@media(max-width:600px)": {
      width: "15rem",
    },
  },
  customBackArrow: {
    position: "absolute",
    top: "0.625rem",
    left: "1.2rem",
    width: "3.125rem",
    padding: 0,
    color: BLACK,
    zIndex: 5,
    "@media (max-width:600px)": {
      left: "0.2rem",
    },
  },
  tableWrapperWarehouseStyles: {
    height: "calc(100vh - 17rem)",
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  proceedToKycButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerHeight: {
    height: "calc(100vh - 21rem)",
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  subContentContainer: {
    minHeight: "calc(100vh - 12.5rem)",
  },
  subContentContainerCustom: {
    minHeight: "calc(100vh - 10.5rem)",
  },
  noDataContainer: {
    height: "calc(100vh - 25rem)",
  },
  certificateContainer: {
    marginTop: "1rem",
    maxWidth: "21.25rem",
  },
  certificateContainerInput: {
    // marginTop: "1rem",
    maxWidth: "21.25rem",
  },

  tinNumberContainer: {
    "@media(max-width: 600px)": {
      marginTop: "2rem",
    },
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  companyDetailMainContainer: {
    display: "flex",
    margin: "1rem",
    width: "80%",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  noContentDropDown: {
    height: "calc(100vh - 11.5rem)",
  },
  tableHeightNoSearchFilter: {
    height: `calc(100vh - ${TABLE_HEIGHT_NO_SEARCH_FILTER})`,
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  tableHeightNoBackgroundTabs: {
    height: `calc(100vh - ${TABLE_HEIGHT_NO_BACKGROUND_TABS})`,
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  tabButtonContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    height: "4.25rem",
    borderRadius: "0.5rem",
    padding: "0rem 1.5rem",
    marginRight: "1rem",
    cursor: "pointer",
    "@media(max-width:600px)": {
      padding: "0rem 1rem",
      margin: "0.5rem 1rem 0.5rem 0rem",
    },
  },
  activeTabButtonStyle: {
    backgroundColor: ACTIVE_GREEN,
  },
  activeText: {
    color: WHITE,
  },
  tableHeightNoBackgroundTabsSingleFilter: {
    height: `calc(100vh - 21.9rem)`,
    overflow: "auto",
    ...commonStyles.customSrollBar,
  },
  inputHeight: { height: "calc(100vh - 11rem)" },
  noBackgroundTab: {
    paddingTop: "1.25rem",
  },
  tableWrap: {
    flexWrap: "noWrap",
  },
  tableCreateButtonHeight: {
    overflowY: "auto",
    height: "calc(100vh - 24.6rem)",
    ...commonStyles.customSrollBar,
  },
  noDataPagination: {
    overflowY: "auto",
    height: "calc(100vh - 21rem)",
    ...commonStyles.customSrollBar,
  },
  noPaginationNoFilterTableStyles: {
    overflowY: "auto",
    ...commonStyles.customSrollBar,
    height: `calc(100vh -  ${TABLE_HEIGHT_NO_PAGINATION_NO_FILTER})`,
  },
  tableHeightNoDataFoundNoFilter: {
    height: `calc(100vh -  ${TABLE_HEIGHT_NO_DATA_FOUND_NO_FILTER})`,
  },
  tableHeightNoDataFoundSearchFilter: {
    height: `calc(100vh -  ${TABLE_HEIGHT_NO_DATA_FOUND_SEARCH_FILTER})`,
  },
  financeFarmerListing: {
    overflowY: "auto",
    height: "calc(100vh - 26.5rem)",
    ...commonStyles.customSrollBar,
  },
};

export const bankCommonStyles = {
  bankingDetails: {
    width: "100%",
  },
  addressMainHeading: {
    fontWeight: "500",
    fontSize: "0.875rem",
    color: PRIMARY_GREEN,
    marginBottom: "1.25rem",
    marginTop: "1.25rem",
    "@media(max-width:600px)": {
      left: "1.875rem",
    },
  },
  addressHeading: {
    color: DARK_GREY,
    marginBottom: "1.25rem",
    display: "flex",
    gap: "0.25rem",
    "@media(max-width:600px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  addressLineHeading: {
    whiteSpace: "nowrap",
  },
  subHeadingColor: {
    color: BLACK,
  },
  addressContent: {
    overflowWrap: "anywhere",
  },
  bankingContent: {
    display: "flex",
    gap: "1.25rem",
    width: "100%",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
      gap: "0px",
    },
  },
  widthContainer: {
    width: "50%",
    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
};

export const commonAddProductStyles = {
  heading: {
    marginTop: "3.125rem",
    textAlign: "center",
    top: "3.125rem",
    color: PRIMARY_GREEN,
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
    fontWeight: "500",
    "@media (max-width: 600px)": {
      textAlign: "center",
      marginTop: "0.625rem",
    },
  },
  gridBox: {
    marginTop: "2.5rem",
    "@media (max-width: 600px)": {
      marginTop: "2.25rem",
    },
  },
  gridBlogBox: {
    marginTop: "1.5rem",
    width: "70%",
    "@media (max-width: 600px)": {
      marginTop: "2.25rem",
    },
  },
  gridData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1150px)": {
      width: "100%",
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
    },
  },
  mainContainer: {
    backgroundColor: "#fff",
    width: "calc(100% - 6.25rem)",
    height: "calc(100vh - 12.5rem)",
    overflowY: "scroll",
    margin: "auto",
    marginBottom: "2rem",
    position: "relative",
    borderRadius: "0.5rem",
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    "@media (max-width: 600px)": {
      height: "auto",
      padding: "1.25rem",
      width: "92%",
    },
  },
  radioOptions: {
    border: "none",
    boxShadow: "none",
    marginLeft: "-0.313rem",
    marginBottom: "0.313rem",
  },
  bulkUploadMainBox: {
    width: "43.75rem",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1150px)": {
      width: "100%",
    },
  },
  noteBox: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
  },
  marginTop12: { marginTop: "0.75rem" },
  notePoints: { fontWeight: "400", marginTop: "0.5rem" },
  apiResponseBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1.188rem",
    width: "100%",
  },
  bulkAddButton: {
    width: "11.313rem",
    marginBottom: "1.563rem",
  },

  apiResponseError: { fontWeight: "400", marginTop: "1rem", color: "red" },
  responsiveBox: {
    "@media (max-width: 600px)": {
      display: "block",
      width: "100%",
      marginLeft: "1.25rem",
      marginRight: "1.25rem",
    },
  },
  marginTopMinus10: { marginTop: "-0.625rem" },
};

export const walletStyles = {
  walletCardContainer: {
    margin: "2rem 0",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },

  walletCardAvailBal: {
    background:
      "linear-gradient(225deg, hsla(148, 100%, 21%, 1) 31%, hsla(43, 57%, 54%, 1) 58%, hsla(64, 40%, 42%, 1) 59%, hsla(35, 100%, 65%, 1) 68%)",
    borderRadius: "0.5rem",
    width: "100%",
    padding: "2rem 2rem",
  },

  walletCardCurrBal: {
    background:
      "linear-gradient(225deg, hsla(148, 100%, 21%, 1) 31%, hsla(122, 35%, 70%, 1) 58%, hsla(136, 30%, 52%, 1) 59%, hsla(87, 16%, 42%, 1) 68%)",
    borderRadius: "0.5rem",
    width: "100%",
    padding: "2rem 2rem",
  },

  walletCardBal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    color: WHITE,
  },

  walletCardHeadingTextBal: {
    fontSize: "4rem",
    fontWeight: 600,
  },

  walletCardHeadingText: {
    fontSize: "1rem",
  },

  walletCardWithdrawText: {
    cursor: "pointer",
    backgroundColor: PRIMARY_GREEN,
    color: WHITE,
    padding: "0.3rem",
    borderRadius: "0.5rem",
    width: "8rem",
    textAlign: "center",
    marginTop: "1rem",
    fontWeight: 600,
  },
};

export const dashboardStyles = {
  dashboardBox: {
    cursor: "pointer",
    height: "8rem",
    backgroundColor: WHITE,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "0.5rem",
    padding: "2rem",
    "@media (max-width:600px)": {
      margin: "1rem 0rem",
    },
  },

  dashboardWalletContainer: {
    background:
      "linear-gradient(225deg, hsla(148, 100%, 21%, 1) 32%, hsla(136, 30%, 52%, 1) 58%, hsla(122, 35%, 70%, 1) 59%, hsla(91, 43%, 43%, 1) 68%)",
    cursor: "pointer",
    borderRadius: "0.5rem",
    marginTop: "1.5rem",
    padding: "1.5rem",
    minHeight: "2rem",
  },
  dashboardWalletContainerFarmerDetails: {
    width: "100%",
    height: "18rem",
    background:
      "linear-gradient(225deg, hsla(148, 100%, 21%, 1) 32%, hsla(136, 30%, 52%, 1) 58%, hsla(122, 35%, 70%, 1) 59%, hsla(91, 43%, 43%, 1) 68%)",
    borderRadius: "8px",
    padding: "2rem",
    "@media(max-width: 768px)": {
      height: "14rem",
      padding: "1.5rem",
    },
  },
  dashboardWalletContainerFarmerDetailsNobankFound: {
    width: "100%",
    height: "18rem",
    background: "#E6F0EB",
    borderRadius: "8px",
    padding: "2rem",
    border: "#6D9E3F 2px dashed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media(max-width: 768px)": {
      height: "14rem",
    },
  },
  dashboardWalletContainerNobankFound: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
  },
  dashboardWalletContainerNobankFoundHeader: {
    color: "#585858",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    "@media(max-width: 768px)": {
      lineHeight: ".8rem",
      fontSize: ".8rem",
      textAlign: "center",
    },
  },
  dashboardWalletContainerNobankFoundbutton: {
    color: "white",
    background: "rgba(0, 109, 51, 1)",
    cursor: "pointer",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    border: "1px solid transparent",
    borderRadius: "8px",
    padding: "1.1rem 1.5rem",
    transition: "background 0.3s ease, transform 0.3s ease",
    "&:hover": {
      transform: "scaleX(1.1)",
    },
    "@media(max-width: 768px)": {
      lineHeight: ".8rem",
      fontSize: ".8rem",
    },
  },

  dashboardWalletName: {
    color: WHITE,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "4rem",
  },
  dashboardacctnumb: {
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "2rem",
    color: WHITE,
  },
  dashboardacctdet: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
  },

  dashboardWalletCardBal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  dashboardWalletCardHeadingTextAvailBal: {
    fontWeight: 400,
    fontSize: "0.8rem",
    lineHeight: ".6rem",
    color: WHITE,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardWalletstatus: {
    fontWeight: 400,
    fontSize: "0.9rem",
    lineHeight: "1.8rem",
    color: WHITE,
    "@media (max-width: 768px)": {
      fontSize: ".6rem",
      lineHeight: "1.6rem",
    },
  },

  dashboardWalletCardAmtAvailBal: {
    fontWeight: 700,
    fontSize: "2.5rem",
    color: WHITE,
    // marginBottom: "0.3rem",
    lineHeight: "3.5rem",
    height: "3rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
  },

  dashboardWalletCardHeadingTextCurrBal: {
    fontWeight: 400,
    fontSize: "0.8rem",
    color: WHITE,
  },

  dashboardWalletCardAmtCurrBal: {
    fontWeight: 700,
    fontSize: "2.5rem",
    color: WHITE,
  },
  dashboardWalletcardreq: {
    fontWeight: 500,
    fontSize: "1.1rem",
    lineHeight: "1.8",
    "@media (max-width: 768px)": {
      fontSize: ".8rem",
      lineHeight: "1.2rem",
    },
  },
  dashboardWalletcardreqbuton: {
    backgroundColor: "white",
    padding: "1.5rem 0",
    width: "12rem",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#006B32",
    transition: " transform 0.3s ease",
    "&:hover": {
      transform: "scaleX(1.1)",
    },
    "@media (max-width: 768px)": {
      padding: ".7rem 0",
      width: "8rem",
    },
  },
  dashboardWalletcardreqbutontrue: {
    backgroundColor: "red",
    color: "white",
    padding: "1.5rem 0",
    width: "12rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scaleX(1.1)",
    },
    "@media (max-width: 768px)": {
      padding: ".7rem",
      width: "8rem",
    },
  },

  dashboardContainer: {
    marginTop: "0",
    padding: "1.25rem 1.7rem 1.7rem ",
    backgroundColor: "#f4f4f4",
    overflowY: "auto",
    height: "calc(100vh - 4.6rem)",
    alignContent: "start",
  },

  dashboardBoxHeadingText: {
    fontWeight: 400,
    fontSize: "0.9rem",
    lineHeight: "1.3rem",
    color: BLACK,
    marginBottom: "0.75rem",
    textAlign: "center",
  },
  dashboardBoxCount: {
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: "1.87rem",
    color: PRIMARY_GREEN,
  },
  dashboardSubInfo: {
    height: "4.3rem",
    backgroundColor: WHITE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "0.5rem",
    marginTop: "2rem",
    color: PRIMARY_GREEN,
    textAlign: "center",
    marginBottom: "1rem",
    "@media (max-width:576px)": {
      marginTop: "1rem",
      height: "4.7rem",
      padding: "0px 16px",
    },
  },
  dashboardSubInfoText: {
    fontWeight: 500,
    fontSize: "0.9rem",
    lineHeight: "1.3rem",
  },
  chartBox: {
    height: "382px",
    marginTop: "10px",
  },
  loaderDotsImage: {
    width: "25px",
  },
  hideInMobile: {
    "@media (max-width:900px)": {
      display: "none",
    },
  },

  showOnlyInMobile: {
    display: "none",
    "@media (max-width:900px)": {
      display: "block",
    },
  },
  dashboardCountContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "0.875rem",
    gap: "1.5rem",
    "@media (max-width:600px)": {
      justifyContent: "center",
    },
  },

  signupFormFieldContainerSubscribe: {
    margin: ".75rem auto 0",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingBlock: ".5rem",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: "full",
    textAlign: "left",
    margin: "2.25rem auto 0",
    "@media(max-width:600px)": {
      margin: "0",
    },
  },
};

export const productList = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    padding: "3rem 0",
    background: "white",
  },
  containerExpanded: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
    height: "auto",
    padding: "1.5rem",
    "@media(max-width:768px)": {
      width: "100%",
    },
  },
  title: {
    textAlign: "center",
    padding: "1rem",
    color: PRIMARY_GREEN,
    fontWeight: "bold",
    transition: "5s ease-out",
  },
  valueProposition: {
    textAlign: "left",
    margin: "2rem 0",
    color: PRIMARY_GREEN,
    fontWeight: "700",
    fontSize: "2rem",
    "@media (max-width: 768px)": {
      fontWeight: "600",
      fontSize: "1.2rem",
      margin: "1rem",
    },
    "@media (max-width: 480px)": {
      fontWeight: "500",
      fontSize: "1rem",
      margin: "1rem",
    },
  },
  viewMore: {
    margin: "2rem 0",
    color: PRIMARY_GREEN,
    fontWeight: "700",
    fontSize: "1/2rem",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    backgroundColor: "white",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      fontWeight: "600",
      fontSize: ".8rem",
      margin: "1rem",
    },
    "@media (max-width: 480px)": {
      fontWeight: "500",
      fontSize: ".5rem",
      margin: "1rem",
    },
  },

  valuePropositions: {
    textAlign: "left",
    margin: "0 0 3rem 1rem",
    color: PRIMARY_GREEN,
    fontWeight: "700",
    fontSize: "2rem",
  },
  // partnersList: {
  //   display: "flex",
  //   flexWrap: "noWrap",
  //   gap: "4rem",
  //   margin: "2rem auto",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  //   "@media (max-width: 768px)": {
  //     gap: "3rem",
  //   },
  //   "@media (max-width: 480px)": {
  //     gap: "1.8rem",
  //   },
  // },
};

export const aboutUs = {
  aboutUscontainer: {
    backgroundColor: "#fbfbfb",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  aboutusHeader: {
    textAlign: "center",
    margin: "1rem 0 ",
    color: PRIMARY_GREEN,
    fontWeight: "700",
    fontSize: "2rem",
    "@media (max-width: 768px)": {
      fontSize: "1.3rem",
      fontWeight: "600",
      margin: ".5rem 0 ",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.1rem",
      fontWeight: "500",
    },
  },
  coreValueHeader: {
    margin: "0.5rem 0 ",
    color: PRIMARY_GREEN,
    fontWeight: "600",
    fontSize: "1.6rem",
    fontWeight: "500",
    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
      fontWeight: "600",
      margin: ".5rem 0 ",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem",
      fontWeight: "600",
    },
  },
  notes: {
    textAlign: "center",
    width: "80%",
    lineHeight: "3rem",
    fontSize: "1.5rem",
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    "@media (max-width: 768px)": {
      width: "90%",
      lineHeight: "2rem",
      fontSize: "1.1rem",
      fontWeight: "400",
    },
  },
  box: {
    width: "30%",
    padding: "1rem",
    "@media (max-width: 768px)": {
      width: "40%",
    },
    "@media (max-width: 480px)": {
      width: "80%",
    },
  },
  coreValues: {
    display: "flex",
    width: "80%",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
    gap: "5rem",
    "@media (max-width: 768px)": {
      width: "100%",
      gap: "3rem",
    },
    "@media (max-width: 480px)": {
      width: "100%",
      gap: "2rem",
    },
  },
  covervalueNotes: {
    fontSize: "1.3rem",
    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
    "@media (max-width: 480px)": { fontSize: "1.1rem" },
  },
  valueHeader: {
    textAlign: "left",
    color: PRIMARY_GREEN,
    fontWeight: "700",
    fontSize: "2rem",
    padding: "3rem 1rem",
    "@media (max-width: 768px)": {
      fontSize: "1.3rem",
      fontWeight: "600",
      margin: "2rem 1rem ",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.1rem",
      fontWeight: "500",
    },
  },
};
