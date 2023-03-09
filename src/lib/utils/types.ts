export interface PurchaseType {
  pid: number;
  p_name: string;
  p_date: string;
  p_from: string;
  p_type: string;
  remark: string;
  p_price: number;
  part_sub: string;
  thickness: number;
  part_body: string;
  brand_info: string;
  brand_name: string;
  description: string;
}

export interface ObjectType {
  oid: number;
  pid: number;
  color: string;
  o_name: string;
  location: string;
  broken_date: string;
  broken_info: string;
  description: string;
  time_create: string;
  time_update: string;
}
