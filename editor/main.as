package  {
	
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.external.ExternalInterface;
	
	
	public class main extends MovieClip {
		
		var pilihDesain:MovieClip;
		
		var aktif:MovieClip = null;
		var ayah:MovieClip;
		var ibu1:MovieClip;
		var ibu2:MovieClip;
		var cowo:MovieClip;
		var cewe1:MovieClip;
		var cewe2:MovieClip;
		
		public var dats:Object = new Object();
		public var enable:Boolean = true;
		
		public function main() {
			// constructor code
			this.addEventListener(Event.ADDED_TO_STAGE, init);
		}
		private function init(e:Event) {
			this.removeEventListener(Event.ADDED_TO_STAGE, init);
			
			ExternalInterface.addCallback("gantiDesain", gantiDesain);
			ExternalInterface.addCallback("SetActive", SetActive);
			
			ExternalInterface.call("flashEnabled", "");
			
			pilihDesain = mc_pilihDesain;
			pilihDesain.visible = false;
			pilihDesain.desain1.addEventListener(MouseEvent.CLICK, function() {
												  desainDipilih(1);
												 });
			pilihDesain.desain2.addEventListener(MouseEvent.CLICK, function() {
												  desainDipilih(2);
												 });
			pilihDesain.desain3.addEventListener(MouseEvent.CLICK, function() {
												  desainDipilih(3);
												 });
			
			ayah = mc_ayah;
			ayah.stop();
			ibu1 = mc_ibu1;
			ibu1.stop();
			ibu2 = mc_ibu2;
			ibu2.stop();
			cowo = mc_cowo;
			cowo.stop();
			cewe1 = mc_cewe1;
			cewe1.stop();
			cewe2 = mc_cewe2;
			cewe2.stop();
			
			hitAyah.addEventListener(MouseEvent.CLICK, function() {
									  	desainPilih(ayah);
									  });
			hitIbu1.addEventListener(MouseEvent.CLICK, function() {
									  	desainPilih(ibu1);
									  });
			hitIbu2.addEventListener(MouseEvent.CLICK, function() {
									  	desainPilih(ibu2);
									  });
			hitCowo.addEventListener(MouseEvent.CLICK, function() {
									  	desainPilih(cowo);
									  });
			hitCewe1.addEventListener(MouseEvent.CLICK, function() {
									  	desainPilih(cewe1);
									  });
			hitCewe2.addEventListener(MouseEvent.CLICK, function() {
									  	desainPilih(cewe2);
									  });
			
		}
		private function desainPilih(mc:MovieClip) {
			if (enable) {
				pilihDesain.visible = true;
				aktif = mc;
			}
		}
		private function desainDipilih(no:Number) {
			dats[aktif.name] = no;
			pilihDesain.visible = false;
			gantiDesain(dats);
		}
		public function gantiDesain(_dats:Object) {
			for (var k in _dats) {
				this[k].gotoAndStop(_dats[k]);
			}
			ExternalInterface.call("desainDipilih", _dats);
		}
		public function SetActive(stat:Boolean) {
			enable = stat;
		}
	}
	
}
