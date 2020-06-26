import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: ['Individual', 'Social Service Organization', 'Business'],

  servicesOffered: [
    {
      name: 'Personal Protection Products',
      id: '1',
      selected: false,
      questions: [
        {
          name: 'question1',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question2',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question3',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question4',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question5',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
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
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question2',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question3',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question4',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question5',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
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
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question2',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question3',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question4',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question5',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
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
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question2',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question3',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question4',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question5',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
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
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question2',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question3',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question4',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question5',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
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
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question2',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question3',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question4',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
        },
        {
          name: 'question5',
          choices: ['choice1', 'choice2', 'choice3', 'choice4', 'choice5'],
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
        selectedService: [
          state.selectedServices.filter(s => s.id !== action.payload.id),
        ],
      };
    case actionTypes.ADD_RESPONSES:
      return state;
    default:
      return state;
  }
};
export default reducer;
