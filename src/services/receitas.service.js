export const ReceitasService = {
    async getAllReceitas() {
      const API_URL = 'http://192.168.15.5:3000';
      try {
        const response = await fetch(`${API_URL}/receitas`, {
          method: 'GET',
        });
  
        if (response.status === 200) {
          const jsonRes = await response.json();
          return jsonRes.data;
        } else {
          console.log('Failed to fetch data:', response.statusText);
          return [];
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    },
  };
  