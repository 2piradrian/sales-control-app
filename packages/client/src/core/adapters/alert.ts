import { Alert } from "../../domain";
import toast from "react-hot-toast";


export function sendAlert(alert: Alert) {
    switch(alert.type) {
        case "success":
            toast.success(alert.message);
            break;
        case "error":
            toast.error(alert.message);
            break;
        case "info":
            toast(alert.message, {icon: "ℹ️"});
            break;
        case "nothing":
            break;
        default:
            break;
    };
};