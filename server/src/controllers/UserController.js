module.exports = {
    index(req,res){
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
    },

    //create user
    create(req, res){
        res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
    },

    //Edit user, suspend, ative
    put(req, res){
        res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },

    //delete user
    remove(req,res){
        res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    },

    //get user by id
    Show(req, res){
        res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
    }
}