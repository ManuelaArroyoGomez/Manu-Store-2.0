import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'assets/images/default.png';

  constructor() {
    //before render, NO ASYNC, only one time
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges() {
    //before render
    //changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>' , this.img)

  }

  ngOnInit(): void {
    //befor render
    // ASYNC - fetch - promise --one time
    console.log('ngOnInit', 'imgValue =>' , this.img)
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy')
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
