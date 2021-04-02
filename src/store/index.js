import { createStore } from "vuex";

import {fetchWeather} from '../api/services';
import {getDate} from '../utils'

export const store = createStore({
  state: {
    weather:{},
    searchHistory :[],
  },
  mutations: {
    fetchData:(state, weatherDetails)=>{
      state.weather = {...weatherDetails};
      console.log('mutations: fetchData');

    },
    saveSearch: (state,date)=>{
      state.searchHistory.push({ ...state.weather,date:date});
      console.log('mutations: saveSearch');

    }

    },

  actions: {
    fetchData: async (state, cityName) =>{
      const data = await fetchWeather(cityName);
  
      if(!data){
        console.log('Error Vuex Action:', data);
        return false;
      }

      //save specific info
      const weatherDetails = {
        cityName:cityName,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        description: data.weather[0].main
      }
      //

      state.commit('fetchData',weatherDetails)
      console.log('actions: fetchData');
    },

    saveSearch: (state)=>{
      const date = getDate();
      state.commit('saveSearch',date)
      console.log('actions: saveSearch');

    },



  },
  getters: {
    getWeather: (state)=>{
      return state.weather;
    },
    getSearchHistory:(state)=>{
      return state.searchHistory;
    }
  },

  modules: {},
});
