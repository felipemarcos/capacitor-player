import Foundation

@objc public class Player: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
