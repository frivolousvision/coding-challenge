export const classNameSelector = (status) => {
  switch (status) {
    case "Approved":
      return "green status status-selector";

    case "Researching":
      return "yellow status status-selector";

    case "Pending Approval":
      return "blue status status-selector";

    case "Declined":
      return "red status status-selector";

    default:
      return null;
  }
};
