import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent {
  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() city: string = "";
  // title = 'Initial Title';

  // changeTitle() {
  //   this.title = 'New Title';
  // }
  // @ViewChild('container')
  // containerRef!: ElementRef;

  // ngAfterViewInit() {
  //   console.log('View initialized');
  //   // ทำสิ่งที่คุณต้องการหลังจากที่มุมมองถูกสร้างและแสดง
  //   // เช่น แก้ไขสถานะของ DOM ดึงข้อมูลจากส่วนย่อย เป็นต้น

  //   // ตัวอย่างการเข้าถึงและแก้ไขสถานะของ DOM
  //   const containerElement = this.containerRef.nativeElement;
  //   containerElement.style.backgroundColor = 'yellow';
  // }
  // title: string = "";
  // content: string = "";

  // ngAfterViewChecked() {
  //   // console.log('View checked');
  //   this.title = "HeroTitle"
  //   this.content = "HeroContent"
  //   // ทำสิ่งที่คุณต้องการหลังจากที่มุมมองถูกตรวจสอบและอัพเดต
  //   // เช่น ตรวจสอบค่าในตัวแปร ทำการอัพเดตข้อมูล เป็นต้น
  // }
  // title = ""
  // ngAfterContentInit() {
  //   console.log('Content initialized');
  //   this.title = "Hero!!!!!"
  //   // ทำสิ่งที่คุณต้องการหลังจากที่เนื้อหาถูกตรวจสอบและอัพเดต
  //   // เช่น ตรวจสอบค่าในตัวแปร ทำการอัพเดตข้อมูล เป็นต้น
  // }
  // title: string = '';
  // content: string = '';
  // ngAfterContentChecked() {
  //   console.log('Content checked');
  //   this.title = "HeroTitle"
  //   this.content = "HeroContent"
  // }
}
