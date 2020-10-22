const initialState = {
   services: [],
   service: null,
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      default:
         return state;
   }
};
