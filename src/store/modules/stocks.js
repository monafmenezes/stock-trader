import stocks from "../../data/stocks";
export default {
  state: {
    stocks: [],
  },
  mutations: {
    //               payload
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
  },
  actions: {
    buyStock({ commit },) {
      commit();
    },
    initStocks({ commit }) {
      commit("setStocks", stocks);
    },
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};
