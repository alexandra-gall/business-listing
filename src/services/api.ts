import axios from 'axios';

import { BusinessType } from './models';

export const getBusiness = async (): Promise<BusinessType[]> => {
  try {
    const response = await axios.get<BusinessType[]>(
      'https://api.jsonbin.io/b/625eb6da80883c3054e3915e/13',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
