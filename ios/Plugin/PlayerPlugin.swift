import Foundation
import Capacitor
import AVKit
import AVFoundation

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PlayerPlugin)
public class PlayerPlugin: CAPPlugin {
    private let implementation = Player()
    
    @objc func play(_ call: CAPPluginCall) {
        guard let url = call.getString("url") else {
            call.reject("Video URL cannot be empty");
            return
        }
        
        guard let bridge = self.bridge else { return }
        
        let videoURL = URL(string: url)
        
        let player = AVPlayer(url: videoURL!)
        let playerViewController = AVPlayerViewController()
        playerViewController.player = player
        
        DispatchQueue.main.async {
            bridge.viewController?.present(playerViewController, animated: true) {
                playerViewController.player!.play()
                call.resolve()
            }
        }
    }
}
