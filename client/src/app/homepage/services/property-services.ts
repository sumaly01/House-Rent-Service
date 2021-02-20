import { Injectable } from '@angular/core';
import { BaseService } from './../../shared/base.service'
import { HttpClient } from '@angular/common/http';
import { Property } from '../../models/property.model';
import { Observable } from 'rxjs';


@Injectable()
export class PropertyService extends BaseService {
    constructor(
        public http: HttpClient
    ) {
        super('property');
    }

    getProperty() {
        console.log('URL is---->', this.url)
        return this.http.get(this.url + 'all', this.getOptions());
    }

    getPropertyByUser() {
        console.log('URL is---->', this.url)
        return this.http.get(this.url + 'user', this.getOptionsWithToken());
    }

    // addArticle(data) {
    //     return this.http.post(this.url + 'save', data, this.getOptionsWithToken());
    // }


    getPropertyById(id) {
        console.log('URL is---->', this.url)

        return this.http.get(this.url + 'single/' + id, this.getOptionsWithToken());

    }

    // editArticle(data, id) {
    //     return this.http.post(this.url + 'save/' + id, data, this.getOptionsWithToken());
    // }


    deleteProperty(id) {
        return this.http.delete(this.url + id, this.getOptionsWithToken());
    }



    // Add and edit article with file upload XHR 

    uploadProperty(property: Property, files: Array<any>, method) {
        return new Observable((observer) => {

            const xhr = new XMLHttpRequest();
            const formData = new FormData();

            if (files.length) {
                formData.append('images', files[0], files[0].name)
            }

            for (let key in property) {
                formData.append(key, property[key])
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response)
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            }
            let endUrl;

            if (method == 'PUT') {
                endUrl = this.url + 'edit/' + property._id + '?token=' + localStorage.getItem('token')
            }
            else {
                endUrl = this.url + 'save' + '?token=' + localStorage.getItem('token')

            }
            xhr.open(method, endUrl, true);
            xhr.send(formData)

        })


    }






}




