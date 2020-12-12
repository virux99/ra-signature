import { Component, Input, ViewChild, OnInit, HostListener, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ra-signature',
  template: `
  <canvas #sigPad width="{{width}}" height="{{height}}" (mousedown)="onMouseDown($event)"
  (mousemove)="onMouseMove($event)"></canvas>
  <br/>
  <button (click)="clear()">clear</button>`,
  styles: [`
  canvas {
    border: 1px solid #000;
  }
  span {
    width: 300px;
  }
  `]
})
export class RaSignatureComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.sigPadElement = this.sigPad.nativeElement;
    this.context = this.sigPadElement.getContext('2d');
    this.context.strokeStyle = this.strokeColor;
  }
  @Input() name: string;
  @ViewChild('sigPad') sigPad;
  sigPadElement;
  context;
  isDrawing = false;
  img;

  @Input() strokeColor: string="#000000";
  @Input() height: string="150";
  @Input() width: string="300";
  @Output() imageEvent = new EventEmitter<string>();
  ngOnInit() {
   
  }


  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e) {
    this.isDrawing = false;
    this.img = this.sigPadElement.toDataURL("image/png");
    this.imageEvent.emit(this.img);
  }

  onMouseDown(e) {
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  onMouseMove(e) {
    if (this.isDrawing) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
      
    }
  }

  private relativeCoords(event) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x: x, y: y };
  }

  clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }
}
