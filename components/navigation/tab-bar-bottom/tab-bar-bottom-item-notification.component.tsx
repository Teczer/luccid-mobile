// import { Badge } from '@/components/ui';
// import { View } from '@/components/native';
// import { TabRouteNames } from '@/constants/routes.constant';
// import { useGlobalPersistedStore } from '@/stores/global-persisted.store';
// import { useTotalUnreadMessages } from '@/features/chat-home/queries/hooks/total-unread-messages.hook';
// import { useInvitationsReceived } from '@/features/invitation/hooks/queries/invitations-received.hook';
// import { useUnreadThreadByCenterId } from '@/features/chat-home/queries/hooks/unread-thread-by-center-id.hook';

// interface TabBarBottomItemProps {
//   name: TabRouteNames;
// }

// type RouteNotifications = {
//   [K in TabRouteNames]: number;
// };

// export const TabBarBottomItemNotification = (props: TabBarBottomItemProps) => {
//   const { name } = props;

//   const newFeatureSeen = useGlobalPersistedStore(state => state.newFeatureSeen);

//   const { count: totalUnreadMessages } = useTotalUnreadMessages();
//   const { count: totalUnreadThread } = useUnreadThreadByCenterId();
//   const { invitationsReceivedTotal } = useInvitationsReceived();

//   const showInvitationBadge = invitationsReceivedTotal > 0 || !newFeatureSeen.INVITES;

//   const ROUTE_NOTIFICATIONS: RouteNotifications = {
//     index: totalUnreadMessages,
//     invites: showInvitationBadge ? 1 : 0,
//     menu: 0,
//     responses: totalUnreadThread,
//   };

//   if (ROUTE_NOTIFICATIONS[name] === 0) {
//     return null;
//   }

//   return (
//     <View className="absolute top-[8px] right-0 flex-row items-center justify-center w-full ">
//       <Badge size="small" hasStroke={true} className="ml-4" />
//     </View>
//   );
// };
