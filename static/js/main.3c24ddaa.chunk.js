(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,a,t){e.exports=t(445)},246:function(e,a,t){},445:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),i=t(154),c=t.n(i),r=t(27),l=(t(246),t(155)),s=t.n(l),m=t(156),d=t.n(m),h=t(84),u=t.n(h),v=t(157),k=t(158),f=t(164),T=t(159),p=t(19),N=t(165),E=t(160),b=t.n(E),R=t(161),y=t.n(R),J=t(85),j=t.n(J),O=t(162),g=t.n(O),C=t(86),I=function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(f.a)(this,Object(T.a)(a).call(this))).state={identity:null,roomName:"",roomNameErr:!1,previewTracks:null,localMediaAvailable:!1,hasJoinedRoom:!1,activeRoom:null},t.joinRoom=t.joinRoom.bind(Object(p.a)(t)),t.handleRoomNameChange=t.handleRoomNameChange.bind(Object(p.a)(t)),t.roomJoined=t.roomJoined.bind(Object(p.a)(t)),t.leaveRoom=t.leaveRoom.bind(Object(p.a)(t)),t.detachTracks=t.detachTracks.bind(Object(p.a)(t)),t.detachParticipantTracks=t.detachParticipantTracks.bind(Object(p.a)(t)),t}return Object(N.a)(a,e),Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/token").then(function(a){var t="Harold Breitenberg",o="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzg0OGNkZTAzNDlmYTRlZTc1ZmE0Njk4ZTE4NTUxYTQyLTE1NTE0NjEyNTAiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJIYXJvbGQgQnJlaXRlbmJlcmciLCJ2aWRlbyI6e319LCJpYXQiOjE1NTE0NjEyNTAsImV4cCI6MTU1MTQ2NDg1MCwiaXNzIjoiU0s4NDhjZGUwMzQ5ZmE0ZWU3NWZhNDY5OGUxODU1MWE0MiIsInN1YiI6IkFDYWE3ZTNjZmNjNDAzMjdlZGJkM2Q3OWEwY2VkOGJjNzEifQ.MCJn2ZOh9xrStVyCb0eRTKNOKmo2mATUAKth3FiP1Po";e.setState({identity:t,token:o}),console.log("id: "+t+" token: "+o)})}},{key:"handleRoomNameChange",value:function(e){var a=e.target.value;this.setState({roomName:a})}},{key:"joinRoom",value:function(){if(this.state.roomName.trim()){console.log("Joining room '"+this.state.roomName+"'...");var e={name:this.state.roomName};this.state.previewTracks&&(e.tracks=this.state.previewTracks),b.a.connect(this.state.token,e).then(this.roomJoined,function(e){alert("Could not connect to Twilio: "+e.message)})}else this.setState({roomNameErr:!0})}},{key:"attachTracks",value:function(e,a){e.forEach(function(e){a.appendChild(e.attach())})}},{key:"attachParticipantTracks",value:function(e,a){var t=Array.from(e.tracks.values());this.attachTracks(t,a)}},{key:"detachTracks",value:function(e){e.forEach(function(e){e.detach().forEach(function(e){e.remove()})})}},{key:"detachParticipantTracks",value:function(e){var a=Array.from(e.tracks.values());this.detachTracks(a)}},{key:"roomJoined",value:function(e){var a=this;console.log("Joined as '"+this.state.identity+"'"),this.setState({activeRoom:e,localMediaAvailable:!0,hasJoinedRoom:!0});var t=this.refs.localMedia;t.querySelector("video")||this.attachParticipantTracks(e.localParticipant,t),e.participants.forEach(function(e){console.log("Already in Room: '"+e.identity+"'");var t=a.refs.remoteMedia;a.attachParticipantTracks(e,t)}),e.on("participantConnected",function(e){console.log("Joining: '"+e.identity+"'")}),e.on("trackAdded",function(e,t){console.log(t.identity+" added track: "+e.kind);var o=a.refs.remoteMedia;a.attachTracks([e],o)}),e.on("trackRemoved",function(e,t){a.log(t.identity+" removed track: "+e.kind),a.detachTracks([e])}),e.on("participantDisconnected",function(e){console.log("Participant '"+e.identity+"' left the room"),a.detachParticipantTracks(e)}),e.on("disconnected",function(){a.state.previewTracks&&a.state.previewTracks.forEach(function(e){e.stop()}),a.detachParticipantTracks(e.localParticipant),e.participants.forEach(a.detachParticipantTracks),a.state.activeRoom=null,a.setState({hasJoinedRoom:!1,localMediaAvailable:!1})})}},{key:"leaveRoom",value:function(){this.state.activeRoom.disconnect(),this.setState({hasJoinedRoom:!1,localMediaAvailable:!1})}},{key:"render",value:function(){var e=this.state.localMediaAvailable?n.a.createElement("div",{className:"flex-item"},n.a.createElement("div",{ref:"localMedia"})," "):"",a=this.state.hasJoinedRoom?n.a.createElement(j.a,{label:"Leave Room",secondary:!0,onClick:this.leaveRoom}):n.a.createElement(j.a,{label:"Join Room",primary:!0,onClick:this.joinRoom});return n.a.createElement(C.Card,null,n.a.createElement(C.CardText,null,n.a.createElement("div",{className:"flex-container"},e," ",n.a.createElement("div",{className:"flex-item"},n.a.createElement(g.a,{hintText:"Room Name",onChange:this.handleRoomNameChange,errorText:this.state.roomNameErr?"Room Name is required":void 0}),n.a.createElement("br",null),a,"  "),n.a.createElement("div",{className:"flex-item",ref:"remoteMedia",id:"remote-media"}))))}}]),a}(o.Component),M=t(163);t.n(M)()();var w=document.getElementById("app");Object(r.render)(n.a.createElement(s.a,{muiTheme:u()(d.a)},n.a.createElement("div",null,n.a.createElement(c.a,{title:"React Twilio Video"}),n.a.createElement(I,null))),w)}},[[166,1,2]]]);
//# sourceMappingURL=main.3c24ddaa.chunk.js.map