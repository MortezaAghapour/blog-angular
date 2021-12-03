export class ResultDto {
    statusCode !:number;
    isSuccess !:boolean;
    message !:string;
    errors !:string[];
    data !:any;
}