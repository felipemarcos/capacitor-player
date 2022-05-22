package com.felipemarcos.capacitor.player;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Intent;
import android.net.Uri;

import java.net.URLConnection;

@CapacitorPlugin(name = "Player")
public class PlayerPlugin extends Plugin {

    private Player implementation = new Player();

    @PluginMethod
    public void play(PluginCall call) {
        String url = call.getString("url");

        if (url == null) {
            call.reject("Video URL cannot be empty");
            return;
        }

        Uri videoUrl = Uri.parse(url);
        String mimeType = URLConnection.guessContentTypeFromName(url);


        Intent intent = new Intent(Intent.ACTION_VIEW, videoUrl);
        intent.setDataAndType(videoUrl, mimeType);
        getActivity().startActivity(intent);

        call.resolve();
    }
}
