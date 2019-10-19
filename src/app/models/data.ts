import { Staff } from 'src/app/models/staff';


export class Data {
  constructor(
    public staff: Staff[] = [],
    public photoFF: string[] = [],
    public photoAD: string[] = [],
    public photoK: string[] = [],
    public photoR: string[] = []
  ) {}
}
