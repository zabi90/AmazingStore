import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';



@Component({
  selector: 'app-doument.downloader',
  templateUrl: './doument.downloader.component.html',
  styleUrls: ['./doument.downloader.component.css']
})
export class DownloaderComponent implements OnInit {

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.downloadFile("http://125.209.67.4/DocumentViewers/external/%7B0B82E139-3551-4AE9-9348-6C4DC2D646AE%7D.docx").subscribe(
      response => {
        debugger;
        switch (response.type) {
          case HttpEventType.Response:
            debugger;
            const downloadedFile = new Blob([response.body], {
              type: response.body.type,
            });
            const a = document.createElement("a");
            a.setAttribute("style", "display:none;");
            document.body.appendChild(a);
            a.download =""
            a.href = URL.createObjectURL(downloadedFile);
            a.target = "_blank";
            a.click();
            document.body.removeChild(a);
            break;
        }
      },
      error => {
          console.log("error file downloading ",error);
      });
  }

}
