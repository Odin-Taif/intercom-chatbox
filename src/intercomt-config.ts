/*
  These objects define the canvases that will display in your app, including textareas, inputs, and buttons.
  More information on these can be found in the reference docs.
  Canvas docs: https://developers.intercom.com/docs/references/canvas-kit/responseobjects/canvas/
  Components docs: https://developers.intercom.com/docs/references/canvas-kit/interactivecomponents/button/
*/
export const initialCanvas = {
  canvas: {
    content: {
      components: [
        {
          type: "text",
          id: "feedback",
          text: "Leave us some feedback:",
          align: "center",
          style: "header",
        },
        {
          type: "textarea",
          id: "description",
          label: "Description",
          placeholder: "",
        },
        {
          type: "single-select",
          id: "csat",
          label: "How would you rate your satisfaction with our product?",
          options: [
            {
              type: "option",
              id: "dissatisfied",
              text: "Dissatisfied",
            },
            {
              type: "option",
              id: "neutral",
              text: "Neutral",
            },
            {
              type: "option",
              id: "satisfied",
              text: "satisfied",
            },
          ],
        },
        {
          type: "button",
          label: "Submit",
          style: "primary",
          id: "submit_button",
          action: {
            type: "submit",
          },
        },
      ],
    },
  },
};

export const finalCanvas = {
  canvas: {
    content: {
      components: [
        {
          type: "text",
          id: "thanks",
          text: "Thanks for letting us know!",
          align: "center",
          style: "header",
        },
        {
          type: "button",
          label: "Submit another",
          style: "primary",
          id: "refresh_button",
          action: {
            type: "submit",
          },
        },
      ],
    },
  },
};
