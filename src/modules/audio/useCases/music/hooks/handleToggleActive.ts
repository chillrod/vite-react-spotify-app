import { SetterOrUpdater } from "recoil";

interface MusicTrackProps {
  uri?: string;
  name?: string;
  album?: {
    name?: string;
    images?: { url?: string; height?: number; width?: number }[];
    artists?: { name?: string };
  };
  artists?: { name: string };
  active?: boolean;
  duration_ms?: number;
  order?: number;
}

export const handleToggleActive = (
  musicTrack: MusicTrackProps,
  getPlayerQueue: {}[],
  setPlayerQueue: SetterOrUpdater<{}[]>,
  setQueueOrder: SetterOrUpdater<number>
) => {
  const findTrackToUpdate: { uri?: string; order?: number } =
    getPlayerQueue.find(
      (musicToSearch: { uri?: string }) => musicToSearch.uri === musicTrack.uri
    ) || "";

  const { active: auxActive, order, ...rest } = musicTrack;

  const sameOrder =
    getPlayerQueue.filter(
      (queue: { active?: boolean; order?: number; uri?: string }) =>
        queue.order === order
    ) || "";

  const updateTrack = { active: !auxActive, order, ...rest };

  const changeOrderOfDuplicate = (
    track: MusicTrackProps,
    findTrackToUpdate: MusicTrackProps
  ) => {
    const { order, ...rest } = track;

    const parseOrder = (conditional: any, order: any) => {
      if (conditional) return order + 1;

      return order;
    };

    const parseTrack = {
      order: parseOrder(
        (!findTrackToUpdate.active && track.active) || !track.active,
        order
      ),
      ...rest,
    };

    return parseTrack;
  };

  const mapQueues = getPlayerQueue.map((queueTrack: MusicTrackProps) => {
    sameOrder.forEach((sameOrder) => {
      if (queueTrack.uri === sameOrder.uri) {
        queueTrack = changeOrderOfDuplicate(sameOrder, findTrackToUpdate);
      }
    });

    if (queueTrack.uri === findTrackToUpdate.uri) queueTrack = updateTrack;

    return queueTrack;
  });

  setPlayerQueue(mapQueues);

  setQueueOrder(
    mapQueues.filter((activeQueue: { active?: boolean }) => activeQueue.active)
      .length
  );
};
