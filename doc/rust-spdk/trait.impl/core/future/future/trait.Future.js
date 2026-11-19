(function() {
    const implementors = Object.fromEntries([["spdk",[["impl&lt;'a, F, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.100.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"spdk/task/struct.JoinHandle.html\" title=\"struct spdk::task::JoinHandle\">JoinHandle</a>&lt;'a, F, R&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.100.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = R&gt; + 'a,\n    R: 'static,</div>",0],["impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.100.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"spdk/thread/struct.Poller.html\" title=\"struct spdk::thread::Poller\">Poller</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"spdk/thread/trait.Polled.html\" title=\"trait spdk::thread::Polled\">Polled</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.100.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.100.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = U&gt;,</div>",0]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":59,"fragment_lengths":[1320]}