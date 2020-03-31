package com.expencesiveTime.slieence.mapper;

import com.expencesiveTime.slieence.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
@Mapper
public interface UserMapper {

    @Select("select name from silence.user where id = #{id}")
    public User getUser(@Param("id") int id);

    @Select("select id,name,headurl,password from silence.user where name = #{name} and password = #{password}")
    public User isRegisteredUser(String name,String password);

    @Insert("insert into silence.user(name,password) values (#{name},#{password})")
    public int register(String name,String password);
}
