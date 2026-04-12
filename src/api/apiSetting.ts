import { Endpoints } from "./index";
import type { SettingSingleResponse } from "../@types/settingType";

export const apiSetting = {
  getSettingByKey: async (key: string): Promise<SettingSingleResponse> => {
    const response = await fetch(`${Endpoints.SETTINGS}/${key}`);

    if (!response.ok) {
      throw new Error("Error al obtener la configuración");
    }

    const data = await response.json();
    return data
  },
};
