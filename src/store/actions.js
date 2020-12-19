export default {
    updateInfo(context,payload) {
        setTimeout(() => {
            context.commit('updateInfo')
            console.log(payload.message);
            payload.success()
        },1000)
    }
}