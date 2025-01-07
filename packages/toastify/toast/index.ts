import ReactToastifyAdaptor, { ToastService } from "./ToastService";

class HideeerToastService {
  constructor(private toastService: ToastService) {}

  public showSuccess(message: string) {
    this.toastService.success(message);
  }

  public showError(message: string) {
    this.toastService.error(message);
  }

  public showInfo(message: string) {
    this.toastService.info(message);
  }
}

export const HideeerToast = new HideeerToastService(new ReactToastifyAdaptor());