import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img)
    // code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'assets/images/default.png';
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    //before render, NO ASYNC, only one time
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges(changes: SimpleChanges) {
    //before render
    //changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>' , this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //befor render
    // ASYNC - fetch - promise --one time
    console.log('ngOnInit', 'imgValue =>' , this.img);
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    },1000);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy')
    clearInterval(this.counterFn);
  }

  imgError() {
    //interno
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
