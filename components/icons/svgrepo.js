// Logo Tabbar
const LogoTabbar = () => {
  return (
    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M19.0993 10.6602C20.2113 11.9744 19.98 13.5815 19.9801 15C19.9801 18.9062 14.7132 20 12 20C9.28677 20 4.01994 18.9062 4.01994 15C4.01995 13.5815 3.78875 11.9744 4.90066 10.6602M19.0993 10.6602C18.9048 10.4303 18.6692 10.2094 18.384 10M19.0993 10.6602C19.7993 11.0634 19.9781 9.55469 19.9801 9.0625V7.18761C19.9801 5.56261 18.8629 5.00011 17.9053 5.00011C16.9477 5.00011 15.0324 6.5625 14.394 6.5625C13.6279 6.5625 13.4804 6.40636 12 6.40636C10.5197 6.40636 10.3721 6.5625 9.60601 6.5625C8.9676 6.5625 7.05236 5 6.09476 5C5.13715 5 4.01995 5.5625 4.01995 7.1875V9.0625C4.02188 9.55469 4.20072 11.0634 4.90066 10.6602M4.90066 10.6602C5.09519 10.4303 5.33082 10.2094 5.61599 10" stroke="#3859ff" stroke-width="1.5" stroke-linecap="round"></path> 
        <path opacity="0.5" d="M12.826 16C12.826 16.1726 12.465 16.3125 12.0196 16.3125C11.5742 16.3125 11.2131 16.1726 11.2131 16C11.2131 15.8274 11.5742 15.6875 12.0196 15.6875C12.465 15.6875 12.826 15.8274 12.826 16Z" stroke="#3859ff" stroke-width="1.5"></path> 
        <path opacity="0.5" d="M15.5 13.5938C15.5 14.0252 15.2834 14.375 15.0161 14.375C14.7489 14.375 14.5323 14.0252 14.5323 13.5938C14.5323 13.1623 14.7489 12.8125 15.0161 12.8125C15.2834 12.8125 15.5 13.1623 15.5 13.5938Z" stroke="#3859ff" stroke-width="1.5"></path> 
        <path opacity="0.5" d="M9.5 13.5938C9.5 14.0252 9.28336 14.375 9.01613 14.375C8.74889 14.375 8.53226 14.0252 8.53226 13.5938C8.53226 13.1623 8.74889 12.8125 9.01613 12.8125C9.28336 12.8125 9.5 13.1623 9.5 13.5938Z" stroke="#3859ff" stroke-width="1.5"></path> 
        <path opacity="0.5" d="M22.0004 15.4688C21.5165 15.1562 19.4197 14.375 18.6133 14.375" stroke="#3859ff" stroke-width="1.5" stroke-linecap="round"></path> 
        <path opacity="0.5" d="M20.3871 17.9688C19.9033 17.6562 18.7742 16.875 17.9678 16.875" stroke="#3859ff" stroke-width="1.5" stroke-linecap="round"></path> 
        <path opacity="0.5" d="M2 15.4688C2.48387 15.1562 4.58065 14.375 5.3871 14.375" stroke="#3859ff" stroke-width="1.5" stroke-linecap="round"></path> 
        <path opacity="0.5" d="M3.61279 17.9688C4.09667 17.6562 5.2257 16.875 6.03215 16.875" stroke="#3859ff" stroke-width="1.5" stroke-linecap="round"></path> 
      </g>
    </svg>
  );
}

// Bell Notifycation 
const Bell = ({color="#1C274C",className="w-[24px] h-[24px]"}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
        <path d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="#1C274C" stroke-width="1.5"></path> 
        <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> 
        <path opacity="0.5" d="M12 6V10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> 
      </g>
    </svg>
  )
}

export const svgRepo = {LogoTabbar, Bell};