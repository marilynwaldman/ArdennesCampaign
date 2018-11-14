export class Marker {
  latitude: number;
  longitude: number;
  label: String; draggable: boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
