import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		data: [],
		raw: [],
	},
	getters: {
		DATA: (state) => state.data,
		RAW: (state) => state.raw,
	},
	mutations: {
		SET_DATA(state, data) {
			state.data = data;
		},
		SET_RAW(state, raw) {
			state.raw = raw;
		},
	},
	actions: {
		GET_DATA({ commit }) {
			axios
				.get("http://127.0.0.1:5000/api/v1/verification-profile/get-data")
				.then((response) => {
					const res = response.data;
					commit("SET_DATA", res.data[0]);
					commit("SET_RAW", res.data);
				});
		},
		VERIFICATION_SUCCESS({ commit }, { photo_id, user_id }) {
			axios
				.post(
					"http://127.0.0.1:5000/api/v1/verification-profile/verification",
					{
						photo_id: photo_id,
						user_id: user_id,
						/* more parameters here */
					}
				)
				.then((response) => {
					this.dispatch("GET_DATA");
				})
				.catch((err) => {
					return;
				});
		},
		VERIFICATION_CANCEL({ commit }, { photo_id, user_id }) {
			axios
				.post(
					"http://127.0.0.1:5000/api/v1/verification-profile/cancel-verification",
					{
						photo_id: photo_id,
						user_id: user_id,
						/* more parameters here */
					}
				)
				.then((response) => {
					this.dispatch("GET_DATA");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		BAN_ACC({ commit }, { photo_id, user_id }) {
			axios
				.post("http://127.0.0.1:5000/api/v1/verification-profile/ban-acc", {
					photo_id: photo_id,
					user_id: user_id,
					/* more parameters here */
				})
				.then((response) => {
					this.dispatch("GET_DATA");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		BAN_DEV({ commit }, { photo_id, user_id }) {
			axios
				.post("http://127.0.0.1:5000/api/v1/verification-profile/ban-dev", {
					photo_id: photo_id,
					user_id: user_id,
					/* more parameters here */
				})
				.then((response) => {
					this.dispatch("GET_DATA");
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
