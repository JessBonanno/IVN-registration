import * as actionTypes from '../actions/actionTypes';

const initialState = {
  servicesOffered: [
    {
      name: 'Personal Protection Products',
      id: '1',
      selected: false,
      questions: [
        {
          name: 'question1',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question2',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question3',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question4',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question5',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
      ],
    },
    {
      name: 'Shopping Services',
      id: '2',
      selected: false,
      questions: [
        {
          name: 'question1',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question2',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question3',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question4',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question5',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
      ],
    },
    {
      name: 'Helpline',
      id: '3',
      selected: false,
      questions: [
        {
          name: 'question1',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question2',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question3',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question4',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question5',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
      ],
    },
    {
      name: 'Volunteer Support Services',
      id: '4',
      selected: false,
      questions: [
        {
          name: 'question1',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question2',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question3',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question4',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question5',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
      ],
    },
    {
      name: 'Money',
      id: '5',
      selected: false,
      questions: [
        {
          name: 'question1',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question2',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question3',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question4',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question5',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
      ],
    },
    {
      name: 'Mentor Job Seekers',
      id: '6',
      selected: false,
      questions: [
        {
          name: 'question1',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question2',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question3',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question4',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
        {
          name: 'question5',
          answers: ['answer1', 'answer2', 'answer3', 'answer4', 'answer5'],
        },
      ],
    },
  ],
  selectedServices: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SELECTED_SERVICE:
      const service = state.servicesOffered.filter(
        service => service.id === action.payload.id
      );
      console.log('reducer service: ', service);
      return {
        ...state,
        selectedServices: [...state.selectedServices, service],
      };
      // ! currently only updating the selected property 
    case actionTypes.UPDATE_SERVICES:
      return {
        ...state,
        servicesOffered: [
          ...state.servicesOffered.map(service => {
            if (service.id === action.payload) {
              service.selected = true;
            }
            return service;
          }),
        ],
      };
    case actionTypes.REMOVE_SERVICE:
      console.log('test');
      return {
        ...state,
        selectedService: [state.selectedServices.filter(s => s.id !== action.payload.id)]
      };
    case actionTypes.ADD_RESPONSES:
      return state;
    default:
      return state;
  }
};
export default reducer;
