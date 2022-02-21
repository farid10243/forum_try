const Ziggy = {"url":"http:\/\/forum_tdd_parsinta.test","port":null,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"threads.index":{"uri":"threads","methods":["GET","HEAD"]},"threads.create":{"uri":"threads\/create","methods":["GET","HEAD"]},"threads.store":{"uri":"threads","methods":["POST"]},"threads.show":{"uri":"threads\/{thread}","methods":["GET","HEAD"],"bindings":{"thread":"id"}},"threads.edit":{"uri":"threads\/{thread}\/edit","methods":["GET","HEAD"],"bindings":{"thread":"id"}},"threads.update":{"uri":"threads\/{thread}","methods":["PUT","PATCH"],"bindings":{"thread":"id"}},"threads.destroy":{"uri":"threads\/{thread}","methods":["DELETE"],"bindings":{"thread":"id"}},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
