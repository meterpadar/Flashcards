import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
  	topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
    	const { id, name, icon } = action.payload;
    	state.topics[id] = {
    		id: id,
    		name: name,
    		icon: icon,
    		quizIds: []
    	}
    },
    addQuizId: (state, action) => {
      const topicId = action.payload.topicId;
      const quizId = action.payload.quizId;
    	state.topics[topicId].quizIds.push(quizId);
    }
  },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;