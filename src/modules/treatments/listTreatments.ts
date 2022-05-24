import { TreatmentsRepository } from "@src/entity/treatments/TreatmentsRepository";
import { Request, Response } from "express";

export class ListTreatments{

    async execute(request:Request, response:Response): Promise<Response>{

        const treatmentsRespository = new TreatmentsRepository();
        const resp = await treatmentsRespository.listTreatment();

        return response.status(200).json(resp);
    }
}