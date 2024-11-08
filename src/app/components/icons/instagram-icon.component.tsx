import { IIconComponentProps } from "../../common/interfaces";

/**
 * Instagram icon component
 * @author dgutierrez
 */
export const InstagramIconComponent = ({
  size = "20",
  fill = "white",
  height,
  width,
  color = "white",
  className = "",
}: IIconComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || size}
      height={height || size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={className}
    >
      <path
        d="M5.84513 0.273438H13.9173C16.9924 0.273438 19.491 2.77197 19.491 5.84709V13.9193C19.491 15.3975 18.9037 16.8152 17.8585 17.8604C16.8132 18.9057 15.3955 19.4929 13.9173 19.4929H5.84513C2.77002 19.4929 0.271484 16.9944 0.271484 13.9193V5.84709C0.271484 4.36886 0.858707 2.95118 1.90397 1.90592C2.94923 0.86066 4.36691 0.273438 5.84513 0.273438ZM5.65294 2.19539C4.73542 2.19539 3.85548 2.55987 3.2067 3.20865C2.55792 3.85744 2.19343 4.73737 2.19343 5.65489V14.1115C2.19343 16.0238 3.7406 17.571 5.65294 17.571H14.1095C15.027 17.571 15.907 17.2065 16.5558 16.5577C17.2045 15.9089 17.569 15.029 17.569 14.1115V5.65489C17.569 3.74255 16.0218 2.19539 14.1095 2.19539H5.65294ZM14.9263 3.63685C15.2449 3.63685 15.5505 3.7634 15.7757 3.98868C16.001 4.21395 16.1276 4.51948 16.1276 4.83806C16.1276 5.15665 16.001 5.46218 15.7757 5.68745C15.5505 5.91273 15.2449 6.03928 14.9263 6.03928C14.6078 6.03928 14.3022 5.91273 14.0769 5.68745C13.8517 5.46218 13.7251 5.15665 13.7251 4.83806C13.7251 4.51948 13.8517 4.21395 14.0769 3.98868C14.3022 3.7634 14.6078 3.63685 14.9263 3.63685ZM9.88123 5.07831C11.1556 5.07831 12.3777 5.58453 13.2788 6.48562C14.1799 7.38671 14.6861 8.60885 14.6861 9.88318C14.6861 11.1575 14.1799 12.3796 13.2788 13.2807C12.3777 14.1818 11.1556 14.688 9.88123 14.688C8.60689 14.688 7.38476 14.1818 6.48367 13.2807C5.58258 12.3796 5.07635 11.1575 5.07635 9.88318C5.07635 8.60885 5.58258 7.38671 6.48367 6.48562C7.38476 5.58453 8.60689 5.07831 9.88123 5.07831ZM9.88123 7.00026C9.11663 7.00026 8.38334 7.30399 7.84269 7.84464C7.30204 8.3853 6.9983 9.11858 6.9983 9.88318C6.9983 10.6478 7.30204 11.3811 7.84269 11.9217C8.38334 12.4624 9.11663 12.7661 9.88123 12.7661C10.6458 12.7661 11.3791 12.4624 11.9198 11.9217C12.4604 11.3811 12.7641 10.6478 12.7641 9.88318C12.7641 9.11858 12.4604 8.3853 11.9198 7.84464C11.3791 7.30399 10.6458 7.00026 9.88123 7.00026Z"
        fill={fill || color}
      />
    </svg>
  );
};