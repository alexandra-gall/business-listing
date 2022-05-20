import React from 'react';

import { BusinessType } from './models';
import { getBusiness } from './api';

export const useDataLoading = (): { business: BusinessType[], isLoading: boolean } => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [business, setBusiness] = React.useState<BusinessType[]>([]);
  React.useEffect( () => {
    const loadData = async () => {
      const resp = await getBusiness();
      setBusiness(resp);
      setIsLoading(false);
    }
    loadData();
  }, []);

  return { business, isLoading };
};
