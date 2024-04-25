export interface AlertItem {
  item: {
    id: string;
    createdAt: string;
    result: 'accepted' | 'rejected';
    read: boolean;
    shop: {
      item: {
        name: string;
      };
    };
    notice: {
      item: {
        startsAt: string;
        workhour: number;
      };
    };
  };
}
