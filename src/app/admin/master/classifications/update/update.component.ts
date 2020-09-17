import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../service/api.service';
import { AuthService } from '../../../../service/auth.service';
import { Classifications } from '../../../../model/classifications';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { RefreshProfileService } from 'src/app/service/refresh-profile.service';
import { UpdateSuccessService } from 'src/app/service/update-success.service';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss'],
	providers: [MessageService]
})
export class UpdateComponent implements OnInit {

	classification: Classifications;
	temp: Classifications;

	constructor(private apiService: ApiService, private authService: AuthService, 
		private activatedRoute: ActivatedRoute,private messeageService:MessageService, private updateToast:UpdateSuccessService,
		private router:Router,private refresh:RefreshProfileService) {
		this.classification = new Classifications();
		this.temp = new Classifications();
		this.activatedRoute.queryParams.subscribe((data) => {
			this.temp = <Classifications>data;
			this.classification.name = this.temp.name;
			this.classification.code = this.temp.code;
		})
	}

	ngOnInit() {

	}
	async updateClassification() {
		this.classification.id = this.temp.id;
		this.classification.createdBy = this.temp.createdBy;
		this.classification.updatedBy = this.authService.getAccount().idUser.name;
		console.log(this.classification);
		this.apiService.updateClassifications(this.classification).subscribe(classification => {
			console.log(classification);
			this.updateToast.callUpdateToast();
			// this.messeageService.add({ key: 'tc', severity: 'info', summary: 'Info', detail: 'Transaksi Berhasil' });
			// this.refresh.callRefreshPhoto();
			this.router.navigateByUrl('admin/classifications/view');
		}, err => {
			this.messeageService.add({ key: 'tc', severity: 'error', summary: 'Info', detail: 'Transaksi Gagal' });
		});
		
	}
}
