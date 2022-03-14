import React from "react";
import Card from "./components/Card";
import { connect } from "react-redux";
import { compose } from "redux";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import { firestoreConnect } from "react-redux-firebase";
import { NotificationsType } from "./interfaces";

interface Props {
  notifications: NotificationsType[];
}

const Notifications = (props: Props) => {
  if (props.notifications == null) return null;
  const notifications = props.notifications.map(notification => {
    let time;
    if (notification.time && notification.time.seconds) {
      time = distanceInWordsToNow(new Date(notification.time.seconds * 1000), {
        addSuffix: true
      });
    }
    return (
      <Card key={notification.id} title="">
        <p className="text-grey-darker text-base">{notification.message}</p>
        <p className="text-grey-dark text-base">{time}</p>
      </Card>
    );
  });

  return (
    <div className="container-m flex-col pr-6">
      <h3 className="pb-2">Notifications</h3>
      {notifications}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { notifications: state.firestore.ordered.notifications };
};

type DispatchFunction = (f: any) => void;

const mapDispatchToProps = (dispatch: DispatchFunction) => {
  return {};
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "notifications", orderBy: ["time", "desc"] }])
)(Notifications);
