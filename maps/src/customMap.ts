/// <reference types="@types/google.maps" />

// instructions to class on been usable in addMarker
export interface Markerable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
};

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(markerable: Markerable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerable.location.lat,
        lng: markerable.location.lng
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: markerable.markerContent()
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     },
  //     label: 'company'
  //   })
  // }
}
